import React from "react";

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

      <div className="flex justify-center space-x-4 mt-6">
        <button className="px-6 py-2 bg-pink-500 rounded-full text-white font-bold">DREAM CAR</button>
        <button className="px-6 py-2 bg-purple-500 rounded-full text-white font-bold">ALL LIFESTYLE</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {contests.map((contest) => (
          <div key={contest.id} className="bg-purple-800 p-4 rounded-xl text-center shadow-lg">
            <img src={contest.image} alt={contest.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-bold">{contest.name}</h3>
            <p className="text-sm text-gray-300">Contest No: {contest.id}</p>
            <p className="text-xl font-bold text-green-400">{contest.price}</p>
            <p className="text-sm text-gray-400">Ticket Price</p>
          </div>
        ))}
      </div>

      {/* Browse All Button */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 bg-yellow-500 rounded-full text-white text-lg font-bold shadow-lg hover:bg-yellow-600 transition">
          Browse All
        </button>
      </div>
    </div>
  );
};

export default CurrentContest;
