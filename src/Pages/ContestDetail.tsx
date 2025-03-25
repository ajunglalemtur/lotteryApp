import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GaugeCircle, Rocket, Bolt, Factory, Calendar } from "lucide-react";


const contestDetails = {
  B2T: { name: "The Breeze Zodiac IX", price: "$4.99", image: "/images/car1.jpg", maxEntries: 29994, soldTickets: 17949 },
  X9U: { name: "The Del Sol Trailblazer", price: "$4.99", image: "/images/car2.jpg", maxEntries: 25000, soldTickets: 15000 },
  "8Y3": { name: "The Miata Dart IV", price: "$4.99", image: "/images/car3.jpg", maxEntries: 20000, soldTickets: 12000 },
  R9D: { name: "The Fabia Magnum", price: "$4.99", image: "/images/car4.jpg", maxEntries: 22000, soldTickets: 18000 },
  PR2: { name: "The Omega Navigator", price: "$4.99", image: "/images/car5.jpg", maxEntries: 30000, soldTickets: 19000 },
  W03: { name: "Shelby Cobra", price: "$4.99", image: "/images/car6.jpg", maxEntries: 18000, soldTickets: 10000 },
};

const ContestDetail = () => {
  const { id } = useParams();
  const contest = contestDetails[id as keyof typeof contestDetails];
  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeTab, setActiveTab] = useState("description");

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
            <li><Link to="/" className="hover:text-white">Home</Link> &gt;</li>
            <li><Link to="/contests" className="ml-2 hover:text-white">Contests</Link> &gt;</li>
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
            <p className="text-lg">Max Entries: {contest.maxEntries}</p>
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
              Buy {quantity} Ticket(s)
            </button>

            {/* Tabs Section */}
            <div className="mt-8">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-6 py-3 font-bold rounded-full ${
                    activeTab === "description" ? "bg-pink-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("competition")}
                  className={`px-6 py-3 font-bold rounded-full ${
                    activeTab === "competition" ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  Competition Details
                </button>
              </div>

              {/* Content Section */}
              <div className="mt-6 p-6 bg-purple-700 rounded-lg">
                {activeTab === "description" && (
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vehicle Overview</h3>
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ex eget mi sollicitudin
                      consequat. Fusce purus nunc, sodales at condimentum sed, ullamcorper a nulla.
                    </p>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                    <GaugeCircle className="w-6 h-6 mr-2 text-pink-400" /> Specifications
                  </h3>
                  <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Rocket className="w-5 h-5 text-pink-400" />
                      <strong>0-62 mph:</strong>
                      <span>4.0 secs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GaugeCircle className="w-5 h-5 text-pink-400" />
                      <strong>Top Speed:</strong>
                      <span>181 mph</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bolt className="w-5 h-5 text-pink-400" />
                      <strong>Power:</strong>
                      <span>542 bhp</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bolt className="w-5 h-5 text-pink-400" />
                      <strong>BHP:</strong>
                      <span>691</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Factory className="w-5 h-5 text-pink-400" />
                      <strong>Displacement:</strong>
                      <span>4.0 ltr</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-pink-400" />
                      <strong>Year:</strong>
                      <span>2019</span>
                    </div>
                  </div>
               </div>
                )}
                {activeTab === "competition" && (
                  <div>
                    <h3 className="text-xl font-bold mb-2">Competition Details</h3>
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ex eget mi sollicitudin
                      consequat. Fusce purus nunc, sodales at condimentum sed, ullamcorper a nulla.
                    </p>
                     </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetail;
