import React, { useState } from 'react';
import GalleryTabs from './GalleryTabs';
import VideoGrid from './VideoGrid';
import ImageGrid from './ImageGrid';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const videos = {
    journey: [
      {
        title: 'WSRO 2022',
        embedUrl: 'https://www.youtube.com/embed/CkMbonFTLfw'
      },
      {
        title: 'WSRO 2023',
        embedUrl: 'https://www.youtube.com/embed/QREiXmRgmo4'
      },
      {
        title: 'WSRO 2024',
        embedUrl: 'https://www.youtube.com/embed/UoktjftyStg'
      },
     
     
    ]
  };

  const images = {
    competitions: [
      {
        url: '/gl1.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl2.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl3.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl4.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl5.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl6.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl7.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl8.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl9.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl10.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl11.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl12.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl13.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl14.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl15.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl16.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl17.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl18.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl19.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl20.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl21.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl22.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl23.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl24.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl25.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl26.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl27.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl28.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl29.webp',
        caption: 'National Championship 2023'
      },
      {
        url: '/gl30.webp',
        caption: 'National Championship 2023'
      }
    ],
    workshop: [
      {
        url: '/ws1.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws2.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws3.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws4.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws5.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws6.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws7.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws8.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws9.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws10.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws11.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws12.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws13.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws14.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws15.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws16.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws17.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws18.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws19.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws20.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws21.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws22.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws23.webp',
        caption: 'Robotics Workshop 2023'
      },
      {
        url: '/ws24.webp',
        caption: 'Robotics Workshop 2023'
      },
      // Add more workshop images
    ],
    press: [
      { url: '/pc1.webp', caption: 'WSRO in News' },
      { url: '/pc2.webp', caption: 'WSRO in News' },
      { url: '/pc3.webp', caption: 'WSRO in News' },
      { url: '/pc4.webp', caption: 'WSRO in News' },
      { url: '/pc5.webp', caption: 'WSRO in News' },
      { url: '/pc6.webp', caption: 'WSRO in News' },
      { url: '/pc7.webp', caption: 'WSRO in News' },
      { url: '/pc8.webp', caption: 'WSRO in News' },
      { url: '/pc9.webp', caption: 'WSRO in News' },
      { url: '/pc10.webp', caption: 'WSRO in News' },
      { url: '/pc11.webp', caption: 'WSRO in News' },
      { url: '/pc12.webp', caption: 'WSRO in News' },
      { url: '/pc13.webp', caption: 'WSRO in News' },
      { url: '/pc14.webp', caption: 'WSRO in News' },
      { url: '/pc15.webp', caption: 'WSRO in News' },
      { url: '/pc16.webp', caption: 'WSRO in News' },
      { url: '/pc17.webp', caption: 'WSRO in News' },
      { url: '/pc18.webp', caption: 'WSRO in News' },
      { url: '/pc19.webp', caption: 'WSRO in News' },
      { url: '/pc20.webp', caption: 'WSRO in News' },
      { url: '/pc21.webp', caption: 'WSRO in News' }
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