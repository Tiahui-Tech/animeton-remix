import { useState, useRef, useCallback, useEffect, use } from 'react';
import { useSearchParams, useLocation, useNavigate } from '@remix-run/react';

import log from 'electron-log';

import useTorrentStream from '@hooks/useTorrentStream';
import useSubtitles from '@hooks/useSubtitles';
import useApiSubtitles from '@hooks/useApiSubtitles';
import useChapters from '@hooks/useChapters';
import useUserActivity from '@hooks/useUserActivity';

import VideoSpinner from '@components/video/VideoSpinner';
import VideoControls from '@components/video/VideoControls';
import VideoPlayPauseOverlay from '@components/video/VideoPlayPauseOverlay';
import SubtitleStatus from '@/shared/components/video/SubtitleStatus';

import usePlayerStore from '@stores/player';

import { useNotification } from '@context/NotificationContext';
import { useConfig } from '@context/ConfigContext';
import useCanvasRpcFrame from '@hooks/useCanvasRpcFrame';
import DiscordStatus from '@components/core/DiscordStatus';

const Player = () => {
  const {
    isPlaying,
    duration,
    subtitleContent,
    isMouseMoving,
    setMouseMoving,
    setIsPlaying,
    setPlayLastAction,
    reset,
  } = usePlayerStore();
  const { config } = useConfig();
  const { showNotification } = useNotification();
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const { updateProgress, getEpisodeProgress } = useUserActivity();

  const animeData = state?.animeData;

  const torrentUrl = searchParams.get('url');
  const torrentHash = searchParams.get('hash');

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isLocalBuffering, setIsLocalBuffering] = useState(false);
  let mouseTimer: NodeJS.Timeout;

  const {
    progress,
    downloadSpeed,
    uploadSpeed,
    ready: torrentReady,
    error: torrentError,
  } = useTorrentStream(torrentUrl, torrentHash);
  const { loadApiSubtitles } = useSubtitles(videoRef, isVideoReady);
  const { subtitles, fetchSubtitles } = useApiSubtitles(torrentHash);
  const { chapters } = useChapters();

  const isLoadingVideo =
    isLocalBuffering || (!subtitleContent?.length && !torrentReady);

  const animeImage =
    animeData?.coverImage?.extraLarge ||
    animeData?.bannerImage ||
    animeData?.image;
  const animeTitle =
    animeData?.title?.english ||
    animeData?.title?.romaji ||
    animeData?.torrent?.title;
  const animeEpisode = animeData?.torrent?.episode;

  const rpcFrame = useCanvasRpcFrame({ imageUrl: animeImage }) || null;

  useEffect(() => {
    console.log(animeData);
  }, [animeData]);

  useEffect(() => {
    if (subtitles) {
      loadApiSubtitles(subtitles);
    }
  }, [subtitles]);

  useEffect(() => {
    if (torrentHash) {
      fetchSubtitles();
    }
  }, [torrentHash, fetchSubtitles]);

  useEffect(() => {
    if (torrentError) {
      log.error('Torrent error:', torrentError);

      showNotification({
        title: 'Error',
        message: torrentError,
        type: 'error',
      });
      navigate('/', { viewTransition: true });
    }
  }, [torrentError]);

  useEffect(() => {
    if (torrentHash && videoRef.current) {
      getEpisodeProgress(torrentHash).then(progress => {
        if (progress?.progress) {
          videoRef.current!.currentTime = progress.progress * progress.duration;
        }
      });
    }
  }, [torrentHash]);

  useEffect(() => {
    if (!torrentHash || !duration) return;

    const interval = setInterval(() => {
      if (videoRef.current && !videoRef.current.paused) {
        const progress = videoRef.current.currentTime / duration;
        updateProgress(torrentHash, progress, duration);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [torrentHash, duration, updateProgress]);

  useEffect(() => {
    return () => {
      if (torrentHash && videoRef.current && duration) {
        const finalProgress = videoRef.current.currentTime / duration;
        updateProgress(torrentHash, finalProgress, duration);
      }
    };
  }, [torrentHash, duration]);

  const handleVideoWaiting = useCallback(() => {
    setIsLocalBuffering(true);
  }, []);

  const handleVideoReady = useCallback(() => {
    log.info('Video ready');
    setIsVideoReady(true);
  }, []);

  const handleVideoClick = useCallback(() => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlayLastAction('play');
    } else {
      videoRef.current.pause();
      setPlayLastAction('pause');
    }
  }, [setPlayLastAction]);

  const handleVideoPlay = useCallback(() => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch((error) => {
        log.error('Error playing video', { error });
      });
    }
  }, [setIsPlaying]);

  const handleCanPlay = useCallback(() => {
    setIsLocalBuffering(false);
    handleVideoReady();
  }, [handleVideoReady]);

  const handleMouseMove = useCallback(() => {
    setMouseMoving(true);
    clearTimeout(mouseTimer);
    mouseTimer = setTimeout(() => setMouseMoving(false), 3000);
  }, [setMouseMoving]);

  useEffect(() => {
    const handleTorrentServerDone = (event: any, data: any) => {
      const { url, filePath } = data;
      if (videoRef.current) {
        videoRef.current.src = url;
      }
    };

    window.api.torrent.onServerDone.subscribe(handleTorrentServerDone);

    return () => {
      window.api.torrent.onServerDone.unsubscribe(handleTorrentServerDone);
      clearTimeout(mouseTimer);
      reset();
    };
  }, [reset]);

  return (
    <div
      className={`absolute w-full h-full overflow-hidden ${
        !isMouseMoving ? 'cursor-none' : ''
      }`}
      onMouseMove={handleMouseMove}
    >
      <DiscordStatus
        options={{
          details: animeTitle,
          state: animeEpisode ? `Episodio ${animeEpisode}` : '',
          assets: {
            large_image: rpcFrame,
            small_image: isPlaying ? 'play' : 'pause',
            small_text: isPlaying ? 'Reproduciendo' : 'Pausado',
          },
        }}
      />
      <video
        id="output"
        ref={videoRef}
        autoPlay
        className="w-full h-full max-w-[100vw] max-h-[100vh] flex bg-cover bg-center object-contain"
        onClick={handleVideoClick}
        onCanPlay={handleCanPlay}
        onPlay={handleVideoPlay}
        onWaiting={handleVideoWaiting}
        crossOrigin="anonymous"
      />
      {config?.features?.subtitlesStatus && <SubtitleStatus />}
      <VideoPlayPauseOverlay />
      <VideoControls videoRef={videoRef} chapters={chapters} />
      {isLoadingVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <VideoSpinner
            progress={progress}
            downloadSpeed={downloadSpeed}
            uploadSpeed={uploadSpeed}
          />
        </div>
      )}
      {torrentError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="text-red-500 text-lg">
            Error loading video: {torrentError}
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
