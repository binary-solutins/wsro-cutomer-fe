import React, { useState, useRef, useEffect } from 'react';
import VideoElements from './VideoElements';

const VideoSection = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new YT.Player(`youtube-player-${videoId}`, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            setIsPlaying(true);
          },
          onStateChange: (event) => {
            setIsPlaying(event.data === YT.PlayerState.PLAYING);
          }
        }
      });
    };

    return () => {
      playerRef.current?.destroy();
    };
  }, [videoId]);

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative group w-full">
      {/* Animated Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#485db5] via-[#ef5b4f] to-[#485db5] 
        rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 
        group-hover:duration-200 animate-gradient-x" />
      
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden 
        transform group-hover:scale-[1.02] transition-transform duration-500
        border-2 border-[#485db5]/30">
        {/* Corner Decorations */}
        {[
          'top-0 left-0 border-t-4 border-l-4',
          'top-0 right-0 border-t-4 border-r-4',
          'bottom-0 left-0 border-b-4 border-l-4',
          'bottom-0 right-0 border-b-4 border-r-4'
        ].map((position, index) => (
          <div 
            key={index} 
            className={`absolute w-6 sm:w-8 h-6 sm:h-8 ${position}`}
            style={{ borderColor: index % 2 ? '#485db5' : '#ef5b4f' }}
          />
        ))}

        {/* YouTube Player */}
        <div className="relative w-full h-full">
          <div id={`youtube-player-${videoId}`} className="w-full h-full" />
          
          <VideoElements
            isPlaying={isPlaying}
            isMuted={isMuted}
            onPlayPause={handlePlayPause}
            onMuteToggle={handleMuteToggle}
          />
        </div>
      </div>

      {/* Pulse Effect */}
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#485db5] to-[#ef5b4f] 
        opacity-20 blur-2xl -z-10 animate-pulse" />
    </div>
  );
};

export default VideoSection;