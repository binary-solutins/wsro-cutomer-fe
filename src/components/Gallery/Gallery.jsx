import React, { useState } from 'react';
import GalleryTabs from './GalleryTabs';
import VideoGrid from './VideoGrid';
import ImageGrid from './ImageGrid';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const videos = {
    journey: [
      {
        title: 'WSRO 2023',
        embedUrl: 'https://www.youtube.com/embed/your-video-id-1'
      },
      {
        title: 'WSRO 2022',
        embedUrl: 'https://www.youtube.com/embed/your-video-id-2'
      }
    ]
  };

  const images = {
    competitions: [
      {
        url: '/gl1.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl2.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl3.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl4.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl5.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl6.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl7.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl8.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl9.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl10.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl11.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl12.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl13.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl14.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl15.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl16.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl17.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl18.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl19.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl20.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl21.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl22.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl23.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl24.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl25.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl26.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl27.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl28.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl29.jpg',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl30.jpg',
        caption: 'National Championship 2023'
      }
    ],
    workshop: [
      {
        url: '/ws1.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws2.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws3.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws4.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws5.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws6.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws7.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws8.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws9.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws10.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws11.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws12.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws13.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws14.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws15.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws16.jpeg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws17.jpeg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws18.jpeg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws19.jpeg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws20.jpeg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws21.jpeg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws22.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws23.jpg',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws24.jpg',
        caption: 'Robotics Workshop 2023'
      },
      // Add more workshop images
    ],
    press: [
      { url: '/pc1.jpeg', caption: 'WSRO in News' },
      { url: '/pc2.jpeg', caption: 'WSRO in News' },
      { url: '/pc3.jpeg', caption: 'WSRO in News' },
      { url: '/pc4.jpeg', caption: 'WSRO in News' },
      { url: '/pc5.jpeg', caption: 'WSRO in News' },
      { url: '/pc6.jpeg', caption: 'WSRO in News' },
      { url: '/pc7.jpeg', caption: 'WSRO in News' },
      { url: '/pc8.jpeg', caption: 'WSRO in News' },
      { url: '/pc9.jpeg', caption: 'WSRO in News' },
      { url: '/pc10.jpeg', caption: 'WSRO in News' },
      { url: '/pc11.jpeg', caption: 'WSRO in News' },
      { url: '/pc12.jpeg', caption: 'WSRO in News' },
      { url: '/pc13.jpeg', caption: 'WSRO in News' },
      { url: '/pc14.jpeg', caption: 'WSRO in News' },
      { url: '/pc15.jpeg', caption: 'WSRO in News' },
      { url: '/pc16.jpeg', caption: 'WSRO in News' },
      { url: '/pc17.jpeg', caption: 'WSRO in News' },
      { url: '/pc18.jpeg', caption: 'WSRO in News' },
      { url: '/pc19.jpeg', caption: 'WSRO in News' },
      { url: '/pc20.jpeg', caption: 'WSRO in News' },
      { url: '/pc21.jpeg', caption: 'WSRO in News' }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'journey':
        return <VideoGrid videos={videos.journey} />;
      case 'competitions':
        return <ImageGrid images={images.competitions} />;
      case 'workshop':
        return <ImageGrid images={images.workshop} />;
      case 'press':
        return <ImageGrid images={images.press} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
       
        
        <GalleryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Gallery;