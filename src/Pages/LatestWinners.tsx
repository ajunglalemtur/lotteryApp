import React, { useState } from "react";

const categories = ["Dream Car", "Bike", "Watch", "Laptop", "Money"];

const winners = [
  {
    id: "B2T",
    name: "The Breeze Zodiac IX",
    category: "Dream Car",
    image: "/images/car1.jpg",
    winnerImage: "/images/winner1.png",
    winningNumbers: [11, 88, 23, 9, 19, 26, 87],
    drawDate: "Saturday April 20, 2023",
  },
  {
    id: "B2T",
    name: "The Breeze Zodiac IX",
    category: "Dream Car",
    image: "/images/car2.jpg",
    winnerImage: "/images/winner2.png",
    winningNumbers: [15, 42, 36, 7, 11, 55, 90],
    drawDate: "Saturday April 20, 2023",
  },
  {
    id: "X9U",
    name: "The Omega Navigator",
    category: "Watch",
    image: "/images/watch1.jpg",
    winnerImage: "/images/winner3.png",
    winningNumbers: [22, 18, 35, 44, 67, 89, 90],
    drawDate: "Friday April 15, 2023",
  },
];

const LatestWinners: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Dream Car");

  return (
    <div className="py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <h2 className="text-center text-5xl font-bold">LATEST WINNERS</h2>
      <p className="text-center mt-2 text-lg">
        Check your ticket numbers to see if you're a winner!
      </p>

      {/* Category Selection */}
      <div className="flex justify-center space-x-6 mt-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              selectedCategory === category
                ? "bg-yellow-500 text-black"
                : "bg-purple-700 text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Check My Numbers Section */}
      <div className="bg-purple-800 max-w-4xl mx-auto p-6 rounded-xl mt-10">
        <h3 className="text-xl font-bold">Check My Numbers</h3>
        <p className="text-sm text-gray-300">
          Are you holding on to a winning ticket? Find out now!
        </p>
        <input
          type="text"
          placeholder="Enter Contest No"
          className="w-full mt-4 p-2 rounded-md bg-gray-700 text-white outline-none"
        />
        <div className="flex space-x-2 mt-4">
          {[...Array(7)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={2}
              className="w-10 text-center p-2 rounded-md bg-gray-700 text-white outline-none"
            />
          ))}
        </div>
        <select className="w-full mt-4 p-2 rounded-md bg-gray-700 text-white outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
        <button className="w-full mt-6 py-2 bg-yellow-500 rounded-full text-lg font-bold">
          CHECK MY NUMBERS
        </button>
      </div>

      {/* Winner List */}
      <div className="max-w-6xl mx-auto mt-10 space-y-6">
        {winners
          .filter((winner) => winner.category === selectedCategory) // Filter winners
          .map((winner, index) => (
            <div key={index} className="flex items-center bg-purple-700 p-6 rounded-xl shadow-lg">
              <img src={winner.image} alt={winner.name} className="w-32 h-20 rounded-md" />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-bold">{winner.name}</h3>
                <p className="text-gray-300 text-sm">Draw took place on {winner.drawDate}</p>
                <div className="flex space-x-2 mt-2">
                  {winner.winningNumbers.map((num, i) => (
                    <span key={i} className="bg-yellow-500 px-3 py-1 rounded-full text-black font-bold">
                      {num}
                    </span>
                  ))}
                </div>
              </div>
              <img src={winner.winnerImage} alt="Winner" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LatestWinners;
