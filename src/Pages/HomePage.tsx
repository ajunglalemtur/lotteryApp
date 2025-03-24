import React, { Suspense, lazy } from "react";
import Footer from "./Footer";

// Lazy load heavy components to improve performance
const HowToPlay = lazy(() => import("../Pages/HowToPlay"));
const CurrentContest = lazy(() => import("../Pages/CurrentContest"));
const LatestWinners = lazy(() => import("../Pages/LatestWinners"));
const NumbersSpeak = lazy(() => import("../Pages/NumbersSpeak"));
import CustomerSupport from "../Pages/CustomerSupport";

const HomePage: React.FC = () => {
  return (
    <main className="text-center py-20 px-4 max-w-5xl mx-auto">
      {/* SEO & Accessibility Improvements */}
      <h1 className="text-5xl font-bold">Welcome to Naga Lottery</h1>
      <p className="mt-4 text-lg">Try your luck and win amazing prizes!</p>
      
      {/* Call to Action */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
        Play Now
      </button>
      
      {/* Lazy-loaded sections with a fallback */}
      <Suspense fallback={<p>Loading How to Play...</p>}>
        <HowToPlay />
      </Suspense>
      <Suspense fallback={<p>Loading Current Contest...</p>}>
        <CurrentContest />
      </Suspense>
      <Suspense fallback={<p>Loading Latest Winners...</p>}>
        <LatestWinners />
      </Suspense>
      <Suspense fallback={<p>Loading Numbers Speak...</p>}>
        <NumbersSpeak />
      </Suspense>
      <Suspense fallback={<p>Loading Customer Support...</p>}>
      <CustomerSupport />
     </Suspense>


      
      
      <Footer />
    </main>
  );
};

export default HomePage;

