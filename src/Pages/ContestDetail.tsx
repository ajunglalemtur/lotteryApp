import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const contestDetails = {
  B2T: {
    name: "The Breeze Zodiac IX",
    price: "$4.99",
    image: "/images/car1.jpg",
    maxEntries: 29994,
    soldTickets: 17949,
  },
};

const ContestDetail = () => {
  const { id } = useParams();
  const contest = contestDetails[id as keyof typeof contestDetails];
  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Replace with actual countdown logic
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  if (!contest) return <p className="text-center text-white">Contest not found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <div className="max-w-4xl w-full bg-purple-800 p-8 rounded-xl shadow-lg">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-6">
          <ul className="flex text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">Home</Link> &gt;
            </li>
            <li>
              <Link to="/contests" className="ml-2 hover:text-white">Contests</Link> &gt;
            </li>
            <li className="ml-2 text-white">{contest.name}</li>
          </ul>
        </nav>

        {/* Countdown Timer */}
        <div className="text-center bg-purple-700 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-bold">This competition ends in:</h3>
          <div className="flex justify-center space-x-4 text-2xl font-bold">
            <span>{String(timeLeft.days).padStart(2, '0')} Days</span>
            <span>{String(timeLeft.hours).padStart(2, '0')} Hours</span>
            <span>{String(timeLeft.minutes).padStart(2, '0')} Minutes</span>
            <span>{String(timeLeft.seconds).padStart(2, '0')} Seconds</span>
          </div>
        </div>

        {/* Contest Details */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={contest.image} alt={contest.name} className="w-96 rounded-xl" />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">{contest.name}</h2>
            <p className="text-lg">This competition has a maximum of {contest.maxEntries} entries.</p>
            <p className="mt-1 text-pink-400">Contest No: {id}</p>

            {/* Tickets Progress Bar */}
            <div className="mt-4">
              <p className="text-sm">Tickets Sold</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: `${(contest.soldTickets / contest.maxEntries) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs mt-1">Only {contest.maxEntries - contest.soldTickets} remaining!</p>
            </div>

            <p className="text-2xl text-green-400 font-bold mt-4">{contest.price} Per Ticket</p>

            {/* Quantity Selector */}
            <div className="flex items-center justify-center md:justify-start mt-4">
              <button
                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                className="px-3 py-1 bg-gray-600 text-white rounded-l"
              >
                -
              </button>
              <span className="px-5 py-2 bg-gray-800 text-white">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-gray-600 text-white rounded-r"
              >
                +
              </button>
            </div>

            {/* Buy Tickets Button */}
            <button className="mt-5 px-6 py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600">
              Buy Tickets
            </button>

            {/* Social Sharing */}
            <div className="mt-4 flex justify-center md:justify-start space-x-3">
              <button className="bg-blue-500 px-3 py-2 rounded-full">FB</button>
              <button className="bg-blue-400 px-3 py-2 rounded-full">TW</button>
              <button className="bg-blue-600 px-3 py-2 rounded-full">IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetail;
