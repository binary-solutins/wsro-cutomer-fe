import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoElements = ({
  isPlaying,
  isMuted,
  onPlayPause,
  onMuteToggle
}) => {
  return (
    <>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-8 h-8 bg-[#485db5]/20 rounded-full animate-pulse" />
        <div className="absolute bottom-8 right-12 w-6 h-6 bg-[#ef5b4f]/20 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-[#485db5]/30 rounded-full animate-ping" />
      </div>

      {/* Video Controls */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity 
        duration-300 bg-gradient-to-t from-[#485db5]/60 via-transparent to-[#485db5]/60 flex items-center justify-center">
        <div className="flex gap-4">
          <button
            onClick={onPlayPause}
            className="p-3 rounded-full bg-white/30 hover:bg-[#ef5b4f]/50 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>
          <button
            onClick={onMuteToggle}
            className="p-3 rounded-full bg-white/30 hover:bg-[#ef5b4f]/50 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoElements;