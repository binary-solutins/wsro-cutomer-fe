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
    <div className="relative group w-full h-[80vh] transform-gpu h-[80vh]">
      {/* Enhanced Animated Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#485db5] via-[#ef5b4f] to-[#485db5] 
        rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 
        group-hover:duration-200 animate-gradient-x" />
      
      <div className="relative w-full h-full rounded-2xl overflow-hidden 
        transform group-hover:scale-[1.01] transition-transform duration-500
        border-2 border-[#485db5]/30 shadow-2xl">
        {/* Enhanced Corner Decorations */}
        {[
          'top-0 left-0 border-t-4 border-l-4',
          'top-0 right-0 border-t-4 border-r-4',
          'bottom-0 left-0 border-b-4 border-l-4',
          'bottom-0 right-0 border-b-4 border-r-4'
        ].map((position, index) => (
          <div 
            key={index} 
            className={`absolute w-8 sm:w-10 h-8 sm:h-10 ${position} animate-pulse`}
            style={{ 
              borderColor: index % 2 ? '#485db5' : '#ef5b4f',
              animation: `pulse ${2 + index}s infinite`
            }}
          />
        ))}

        {/* YouTube Player Container with Fixed Aspect Ratio */}
        <div className="relative w-full pb-[56.25%]">
          <div className="absolute inset-0">
            <div id={`youtube-player-${videoId}`} className="w-full h-full" />
            
            <VideoElements
              isPlaying={isPlaying}
              isMuted={isMuted}
              onPlayPause={handlePlayPause}
              onMuteToggle={handleMuteToggle}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Pulse Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#485db5] to-[#ef5b4f] 
        opacity-20 blur-3xl -z-10 animate-pulse" />
        
      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${i % 2 ? '#485db5' : '#ef5b4f'}, transparent)`,
                top: `${Math.random() * 100}%`,
                left: '-100%',
                width: '200%',
                animation: `moveLeftRight ${15 + Math.random() * 20}s linear infinite`,
                animationDelay: `${-Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;