import React from "react";

const HowToPlay: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "CHOOSE",
      description: "Register to Naga Lottery & Choose your contest",
      icon: "🎟️",
    },
    {
      id: "02",
      title: "BUY",
      description: "Pick Your Numbers & Complete your Purchase",
      icon: "✍️",
    },
    {
      id: "03",
      title: "WIN",
      description: "Start Dreaming, you're almost there",
      icon: "🏆",
    },
  ];

  return (
    <section className="bg-[#0a0126] text-white py-16">
      <div className="text-center">
        <h3 className="text-yellow-400 text-xl font-bold">Need to know about</h3>
        <h2 className="text-5xl font-bold mt-2">HOW TO PLAY</h2>
        <p className="mt-4 text-lg">Follow these 3 easy steps!</p>
      </div>

      <div className="mt-10 flex justify-center gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-gradient-to-br from-purple-700 to-indigo-800 p-8 rounded-xl w-80 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <div className="relative inline-block">
              <div className="text-5xl">{step.icon}</div>
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-sm px-3 py-1 rounded-full">
                {step.id}
              </span>
            </div>
            <h4 className="mt-4 text-2xl font-bold">{step.title}</h4>
            <p className="mt-2 text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToPlay;
