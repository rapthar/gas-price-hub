
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/bc1eeb02-97ea-4e52-84fe-ad478de7e74e.png" alt="Costco Gas Guide" className="h-8" />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-costco-blue transition-colors">
            Home
          </Link>
          <Link to="/united-states" className="text-gray-700 hover:text-costco-blue transition-colors">
            United States
          </Link>
          <Link to="/canada" className="text-gray-700 hover:text-costco-blue transition-colors">
            Canada
          </Link>
          <Link to="/united-kingdom" className="text-gray-700 hover:text-costco-blue transition-colors">
            United Kingdom
          </Link>
          <Link to="/calculator" className="text-gray-700 hover:text-costco-blue transition-colors">
            Fuel Cost Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
