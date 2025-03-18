import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/navbar";
import HomePage from "./Pages/HomePage";  
import AboutPage from "./Pages/AboutPage";  
import ContactPage from "./Pages/ContactPage";  
import Button from "./components/ui/button";
import "./index.css";


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <h2 className="text-5xl font-bold">
          Contest for Your Chance to <span className="text-yellow-400">BIG WIN</span>
        </h2>
        <p className="mt-4 text-lg">
          Now's your chance to win a car! Check out the prestige cars you can win in our car prize draws. 
          Will you be our next lucky winner?
        </p>
        <Button className="mt-6 bg-yellow-500 hover:bg-yellow-400">Participate Now</Button>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
