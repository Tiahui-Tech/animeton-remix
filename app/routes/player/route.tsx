import { useState, useRef, useCallback, useEffect } from 'react';
import { useSearchParams } from '@remix-run/react';

import log from 'electron-log';

import useTorrentStream from '@hooks/useTorrentStream';
import useSubtitles from '@hooks/useSubtitles';
import VideoSpinner from '@components/decoration/VideoSpinner';

const Player = () => {
  const [searchParams] = useSearchParams();
  const torrentUrl = searchParams.get('url');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  const {
    progress,
    downloadSpeed,
    uploadSpeed,
    numPeers,
    downloaded,
    total,
    remaining,
  } = useTorrentStream(torrentUrl);

  const { loadSubtitlesFromFile } = useSubtitles(videoRef, isVideoReady);

  const handleVideoReady = useCallback(() => {
    log.info('Video ready');
    setIsVideoReady(true);
  }, []);

  const handleVideoPlay = useCallback(() => {
    if (videoRef.current) {
      log.info('Playing video');
      videoRef.current.play().catch((error) => {
        log.error('Error playing video', { error });
      });
    }
  }, []);

  const handleWaiting = useCallback(() => {
    setIsBuffering(true);
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsBuffering(false);
    handleVideoReady();
  }, [handleVideoReady]);

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
    };
  }, []);

  return (
    <div className="player relative h-screen overflow-hidden">
      <div className="letterbox">
        <video
          id="output"
          ref={videoRef}
          className="w-full h-full object-contain"
          controls
          onCanPlay={handleCanPlay}
          onPlay={handleVideoPlay}
          onWaiting={handleWaiting}
          crossOrigin="anonymous"
        />
      </div>
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <VideoSpinner
            progress={downloaded}
            downloadSpeed={downloadSpeed}
            uploadSpeed={uploadSpeed}
          />
        </div>
      )}
    </div>
  );
};

export default Player;
