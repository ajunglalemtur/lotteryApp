import React from "react";
import { FaUserCheck, FaAward, FaChartLine, FaHandshake, FaShieldAlt, FaGlobe, FaHeadset } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUserCheck {...{ size: 50, color: "white" }} />,
    value: "12000+",
    label: "Verified Users",
  },
  {
    id: 2,
    icon: <FaChartLine {...{ size: 50, color: "white" }} />,
    value: "13",
    label: "Years on the market",
  },
  {
    id: 3,
    icon: <FaAward {...{ size: 50, color: "white" }} />,
    value: "98%",
    label: "Customer Satisfaction",
  },
];

const features = [
  {
    id: 1,
    icon: <FaHandshake {...{ size: 40, color: "#facc15" }} />, // Yellow color
    title: "Safe Service",
    description: "Nulla ultricies in nulla ac efficitur. In vel neque arcu. Donec quis.",
  },
  {
    id: 2,
    icon: <FaShieldAlt {...{ size: 40, color: "#facc15" }} />,
    title: "Security",
    description: "Nulla ultricies in nulla ac efficitur. In vel neque arcu. Donec quis.",
  },
  {
    id: 3,
    icon: <FaGlobe {...{ size: 40, color: "#facc15" }} />,
    title: "Network",
    description: "Nulla ultricies in nulla ac efficitur. In vel neque arcu. Donec quis.",
  },
  {
    id: 4,
    icon: <FaHeadset {...{ size: 40, color: "#facc15" }} />,
    title: "Support",
    description: "Nulla ultricies in nulla ac efficitur. In vel neque arcu. Donec quis.",
  },
];

const NumbersSpeak: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      {/* Numbers Speak Section */}
      <h3 className="text-center text-yellow-400 text-lg font-semibold">
        Our Users Around the World
      </h3>
      <h2 className="text-center text-5xl font-bold mt-2">
        LET THE NUMBERS SPEAK FOR US
      </h2>
      <p className="text-center mt-4 text-lg max-w-3xl mx-auto">
        Over the years, we have provided millions of players with tickets to lotteries across the globe
        and enjoyed having more than one million winners.
      </p>

      {/* World Map Section */}
      <div className="relative flex justify-center mt-10">
        <img
          src="/images/world-map.png"
          alt="Global Reach"
          className="w-full max-w-5xl opacity-50"
        />
      </div>

      {/* Stats Section */}
      <div className="mt-10 flex justify-center flex-wrap gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-purple-700 p-6 rounded-2xl text-center w-64 shadow-lg">
            <div className="flex justify-center">{stat.icon}</div>
            <h4 className="text-3xl font-bold mt-2">{stat.value}</h4>
            <p className="text-gray-300 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>

  {/* Features Section (Unified Container) */}
<div className="mt-20 flex flex-col lg:flex-row items-center text-center lg:text-left justify-center px-10 gap-10">
  
  {/* Feature Text Section */}
  <div className="max-w-xl">
    <h3 className="text-yellow-400 text-lg font-semibold">
      An Exhaustive list of
    </h3>
    <h2 className="text-5xl font-bold mt-2">OUR FEATURES.</h2>
    <p className="mt-4 text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis
      vehicula interdum, sem metus iaculis sapien, sed bibendum lectus augue eu metus.
    </p>
    <a href="#" className="text-yellow-400 mt-4 inline-block">
      Show all features &raquo;
    </a>
  </div>

  {/* Feature Cards (Wrapped in a grid) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {features.map((feature) => (
      <div key={feature.id} className="bg-purple-600 p-6 rounded-2xl text-center w-60 shadow-lg">
        <div className="flex justify-center">{feature.icon}</div>
        <h4 className="text-xl font-bold mt-2">{feature.title}</h4>
        <p className="text-gray-300 text-sm">{feature.description}</p>
      </div>
    ))}
  </div>
</div>
 </div>
  );
};

export default NumbersSpeak;
