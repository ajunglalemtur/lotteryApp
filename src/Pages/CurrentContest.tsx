import React from "react";
import { Link } from "react-router-dom";

const contests = [
  { id: "B2T", name: "The Breeze Zodiac IX", price: "$3.99", image: "/images/car1.jpg" },
  { id: "X9U", name: "The Del Sol Trailblazer", price: "$3.99", image: "/images/car2.jpg" },
  { id: "8Y3", name: "The Miata Dart IV", price: "$3.99", image: "/images/car3.jpg" },
  { id: "R9D", name: "The Fabia Magnum", price: "$3.99", image: "/images/car4.jpg" },
  { id: "PR2", name: "The Omega Navigator", price: "$3.99", image: "/images/car5.jpg" },
  { id: "W03", name: "Shelby Cobra", price: "$3.99", image: "/images/car6.jpg" }
];

const CurrentContest: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <h2 className="text-center text-5xl font-bold">CURRENT CONTEST</h2>
      <p className="text-center mt-2 text-lg">Try your chance at winning!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {contests.map((contest) => (
          <Link key={contest.id} to={`/contest/${contest.id}`} className="block">
            <div className="bg-purple-800 p-4 rounded-xl text-center shadow-lg cursor-pointer hover:bg-purple-700 transition">
              <img src={contest.image} alt={contest.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-bold">{contest.name}</h3>
              <p className="text-sm text-gray-300">Contest No: {contest.id}</p>
              <p className="text-xl font-bold text-green-400">{contest.price}</p>
              <p className="text-sm text-gray-400">Ticket Price</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CurrentContest;
