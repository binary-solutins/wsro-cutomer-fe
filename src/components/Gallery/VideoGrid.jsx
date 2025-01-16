import React from 'react';

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <iframe
            className="w-full h-full"
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;