import React, { Suspense, lazy, memo } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

// Memoize Footer for performance optimization
const MemoizedFooter = memo(Footer);

// Lazy load heavy components to improve performance
const HowToPlay = lazy(() => import("../Pages/HowToPlay"));
const CurrentContest = lazy(() => import("../Pages/CurrentContest"));
const LatestWinners = lazy(() => import("../Pages/LatestWinners"));
const NumbersSpeak = lazy(() => import("../Pages/NumbersSpeak"));
const CustomerSupport = lazy(() => import("../Pages/CustomerSupport"));


const HomePage: React.FC = () => {
  return (
    <main className="text-center py-20 px-4 max-w-5xl mx-auto">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Home | Naga Lottery</title>
        <meta name="description" content="Try your luck and win amazing prizes with Naga Lottery!" />
      </Helmet>

      {/* SEO & Accessibility Improvements */}
      <h1 className="text-5xl font-bold">Welcome to Naga Lottery</h1>
      <p className="mt-4 text-lg">Try your luck and win amazing prizes!</p>

      {/* Call to Action */}
      <button 
        aria-label="Click to play and win prizes" 
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
      >
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

      {/* Use Memoized Footer */}
      <MemoizedFooter />
    </main>
  );
};

export default HomePage;
