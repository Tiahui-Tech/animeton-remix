import { useState, useRef, useCallback, useEffect } from 'react';
import { Progress } from '@nextui-org/react';
import { useSearchParams } from '@remix-run/react';

import log from 'electron-log';

import { useTorrentStream } from '@hooks/useTorrentStream';
import { useSubtitles } from '@hooks/useSubtitles';

export default function Player() {
  const [searchParams] = useSearchParams();
  const torrentUrl = searchParams.get('url');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const {
    torrent,
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
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen p-4">
      <div className="mb-4 w-full max-w-4xl">
        <Progress
          color="secondary"
          aria-label="Loading..."
          className="w-full"
          value={progress}
        />
        <video
          id="output"
          ref={videoRef}
          className="w-full mt-4 rounded-lg shadow-lg"
          controls
          onCanPlay={handleVideoReady}
          onPlay={handleVideoPlay}
          crossOrigin="anonymous"
        />
      </div>
      <div className="rounded-lg shadow-md p-4 max-w-4xl w-full">
        <div className="mb-2">
          <span
            className={`font-semibold ${
              torrent?.done ? 'text-green-600' : 'text-blue-600'
            }`}
          >
            {torrent?.done ? 'Seeding' : 'Downloading'}
          </span>
          <a
            className="text-sm text-gray-600 hover:text-gray-800 ml-2 break-all"
            href={torrentUrl}
          >
            {torrentUrl}
          </a>
          <span
            className={`ml-2 ${
              torrent?.done ? 'text-green-600' : 'text-blue-600'
            }`}
          >
            {torrent?.done ? ' to ' : ' from '}
          </span>
          <span className="font-mono text-sm">{numPeers} peers</span>
        </div>
        <div className="text-sm">
          <span className="font-mono">{downloaded}</span>
          <span> of </span>
          <span className="font-mono">{total}</span>
          <span className="ml-2">{remaining}</span>
          <div className="mt-1">
            <span className="mr-2">↓</span>
            <span className="font-mono">{downloadSpeed}/s</span>
            <span className="mx-2">/</span>
            <span className="mr-2">↑</span>
            <span className="font-mono">{uploadSpeed}/s</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <input
          type="file"
          accept=".ass"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              loadSubtitlesFromFile(e.target.files[0]);
            }
          }}
          className="w-full p-2 border rounded-lg"
        />
      </div>
    </div>
  );
}
