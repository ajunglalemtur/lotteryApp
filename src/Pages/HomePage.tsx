import React from "react";
import HowToPlay from "../Pages/HowToPlay";
import CurrentContest from "../Pages/CurrentContest";
import LatestWinners from "../Pages/LatestWinners";


const HomePage: React.FC = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-5xl font-bold">Welcome to Naga Lottery</h2>
      <p className="mt-4 text-lg">Try your luck and win amazing prizes!</p>
      <HowToPlay /> {/* Add the How to Play Section */}
      <CurrentContest />  {/* 🎯 Add Current Contest Section */}
      <LatestWinners /> {/* Added Latest Winners Section */}
    </div>
    
  );
};

export default HomePage;
