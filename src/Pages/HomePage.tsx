import React from "react";
import HowToPlay from "../Pages/HowToPlay";
import CurrentContest from "../Pages/CurrentContest";
import LatestWinners from "../Pages/LatestWinners";
import NumbersSpeak from "../Pages/NumbersSpeak";
import CustomerSupport from "../Pages/CustomerSupport";
import Footer from "./Footer";


const HomePage: React.FC = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-5xl font-bold">Welcome to Naga Lottery</h2>
      <p className="mt-4 text-lg">Try your luck and win amazing prizes!</p>
      <HowToPlay /> {/* Add the How to Play Section */}
      <CurrentContest />  {/* 🎯 Add Current Contest Section */}
      <LatestWinners /> {/* Added Latest Winners Section */}
      <NumbersSpeak /> {/* 📊 Added Numbers Speak Section */}
      <CustomerSupport /> {/* 📊 Added Customer Support Section */}
      <Footer /> {/* 📊 Added Footer Section */}
    </div>
    
  );
};

export default HomePage;
