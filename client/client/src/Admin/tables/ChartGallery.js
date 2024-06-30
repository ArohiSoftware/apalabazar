import React from 'react';

const ChartGallery = () => {
  const charts = [
    'https://i.pinimg.com/originals/81/08/4d/81084d04dbcadec0b75a7d494b253d7d.gif',
    'https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/5f161a30da75afb3bd496112_choose-the-right-chart-listing.gif',
    'https://cdn.dribbble.com/users/1072657/screenshots/3554102/graph_loop.gif',
    
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {charts.map((chart, index) => (
        <div key={index} className="w-full md:w-1/3 p-5">
          <div className="bg-gray-200 rounded-lg">
            <img
              src={chart}
              alt={`Chart ${index + 1}`}
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '16/9', borderRadius: '5px', padding: '0' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartGallery;
