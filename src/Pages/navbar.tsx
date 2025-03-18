import { Link } from "react-router-dom";
import Button from "../components/ui/button";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-purple-900 bg-opacity-90 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Naga Lottery</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/contest" className="hover:text-yellow-400">Contest</Link></li>
        <li><Link to="/winners" className="hover:text-yellow-400">Winners</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
      <Button className="bg-yellow-500 hover:bg-yellow-400">Buy Tickets</Button>
    </nav>
  );
};

export default NavBar;
