import React from "react";
import { FaHandshake, FaShieldAlt, FaGlobe, FaHeadset } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: (
      <span className="text-yellow-400">
        <FaHandshake size={50} />
      </span>
    ),
    title: "Safe Service",
    description:
      "Nulla ultricies in nulla ac efficitur. In vel neque arcu. Donec quis.",
  },
  {
    id: 2,
    icon: (
      <span className="text-yellow-400">
        <FaShieldAlt size={50} />
      </span>
    ),
    title: "Security",
    description:
      "Nulla ultricies in nulla ac efficitur. In vel neque arcu. Donec quis.",
  },
  {
    id: 3,
    icon: (
      <span className="text-yellow-400">
        <FaGlobe size={50} />
      </span>
    ),
    title: "Network",
    description:
      "Nulla ultricies in nulla ac efficitur. In vel neque arcu. Donec quis.",
  },
  {
    id: 4,
    icon: (
      <span className="text-yellow-400">
        <FaHeadset size={50} />
      </span>
    ),
    title: "Support",
    description:
      "Nulla ultricies in nulla ac efficitur. In vel neque arcu. Donec quis.",
  },
];

const NumbersSpeak: React.FC = () => {
  return (
    <div className="bg-[#12082b] text-white py-16 px-10 flex flex-col lg:flex-row items-start justify-center w-full">
      {/* Left: Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-purple-600 p-6 rounded-2xl text-center w-full shadow-lg"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h4 className="text-xl font-bold mt-2">{feature.title}</h4>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Right: Text Section */}
      <div className="max-w-xl lg:ml-20 text-center lg:text-left mt-10 lg:mt-0">
        <h3 className="text-yellow-400 text-lg font-semibold">
          An Exhaustive list of
        </h3>
        <h2 className="text-5xl font-bold mt-2">OUR FEATURES.</h2>
        <p className="mt-4 text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium,
          elit quis vehicula interdum, sem metus iaculis sapien, sed bibendum
          lectus augue eu metus.
        </p>
        <a href="#" className="text-yellow-400 mt-4 inline-block">
          Show all features &raquo;
        </a>
      </div>
    </div>
  );
};


export default NumbersSpeak;
