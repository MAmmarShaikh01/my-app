"use client"

import Image from 'next/image';
import React, { useState } from 'react';

// JSON Data
const portfolioData = [
  {
    id: 1,
    title: "Custom Logo Digitizing",
    path: "/my.jpg",
    service: "Embroidery"
  },
  {
    id: 2,
    title: "Vintage T-Shirt Design",
    path: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
    service: "Vector"
  },
  {
    id: 3,
    title: "Pet Portrait Embroidery",
    path: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    service: "Embroidery"
  },
  {
    id: 4,
    title: "Architectural Blueprint Vectorization",
    path: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
    service: "Raster-to-Vector"
  },
  {
    id: 5,
    title: "Sports Team Logo",
    path: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    service: "Embroidery"
  },
  {
    id: 6,
    title: "Vintage Car Illustration",
    path: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
    service: "Vector"
  },
  {
    id: 7,
    title: "Fashion Design Embroidery",
    path: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
    service: "Embroidery"
  },
  {
    id: 8,
    title: "Logo Vectorization",
    path: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop",
    service: "Raster-to-Vector"
  },
  {
    id: 9,
    title: "Abstract Pattern Design",
    path: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop",
    service: "Vector"
  },
  {
    id: 10,
    title: "Corporate Branding",
    path: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
    service: "Embroidery"
  },
  {
    id: 11,
    title: "Photograph to Vector",
    path: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop",
    service: "Raster-to-Vector"
  },
  {
    id: 12,
    title: "Mascot Design Vector",
    path: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
    service: "Vector"
  }
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filters = ['All', 'Embroidery', 'Vector', 'Raster-to-Vector'];

  const getFilteredData = () => {
    if (activeFilter === 'All') {
      return portfolioData;
    }
    return portfolioData.filter(item => item.service === activeFilter);
  };

  const filteredData = getFilteredData();
  const displayedData = showAll ? filteredData : filteredData.slice(0, 8);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our diverse collection of digitized embroidery and vectorized art projects. See the quality and precision we bring to every design.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.path}
                //   width={50}
                //   height={50}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Service Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 bg-opacity-90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {item.service}
                  </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-base group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {filteredData.length > 8 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {showAll ? 'Show Less' : `Show All (${filteredData.length - 8} more)`}
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}