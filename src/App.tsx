import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import HomePage from "./Pages/HomePage";  
import AboutPage from "./Pages/AboutPage";  
import ContactPage from "./Pages/ContactPage";  
import ContestDetail from "./Pages/ContestDetail";
import CustomerSupport from "./Pages/CustomerSupport"; 
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/contest/:id" element={<Layout><ContestDetail /></Layout>} />

        {/* ✅ DO NOT WRAP IN <Layout>, ensures no footer */}
        <Route path="/customer-support" element={<CustomerSupport />} />
      </Routes>
    </div>
  );
};

export default App;
