import React, { useState } from "react";
import MOCK_DESTINATIONS from "./data"; // put your array in data.js

function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = selectedCategory === "All"
    ? MOCK_DESTINATIONS
    : MOCK_DESTINATIONS.filter(d => d.category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🌍 Virtual Traveller</h1>

      {/* Category Filter */}
      <div className="mb-6 space-x-3">
        {["All", ...new Set(MOCK_DESTINATIONS.map(d => d.category))].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-lg ${
              selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(dest => (
          <div key={dest.id} className="border rounded-lg p-4 shadow bg-white">
            <h2 className="text-xl font-semibold mb-2">{dest.name}</h2>
            <p className="text-gray-600 mb-2">{dest.description}</p>
            <iframe
              className="w-full h-48 rounded"
              src={dest.videoUrl}
              title={dest.name}
              allowFullScreen
            ></iframe>
            <p className="text-sm mt-2">{dest.travelInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
