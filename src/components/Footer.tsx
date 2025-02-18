
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          <Link to="/about" className="text-gray-600 hover:text-costco-blue">
            About Us
          </Link>
          <Link to="/disclaimer" className="text-gray-600 hover:text-costco-blue">
            Disclaimer
          </Link>
          <Link to="/terms" className="text-gray-600 hover:text-costco-blue">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="text-gray-600 hover:text-costco-blue">
            Privacy Policy
          </Link>
          <Link to="/guides" className="text-gray-600 hover:text-costco-blue">
            Costco Guides
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-costco-blue">
            Contact Us
          </Link>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          <p className="mb-4">
            Costcogasguide.com is an independent source for monitoring fuel prices at Costco gas stations. We are not affiliated with Costco.
          </p>
          <p>Copyright © 2024 Costco Gas Guide | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
