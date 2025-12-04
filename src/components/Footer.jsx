import { Link } from "react-router-dom";
import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-6">
      <div className="mx-auto px-6 lg:px-24 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

          {/* Brand & Description */}
          <div className="space-y-4 ml-20 ">
            <div className="flex items-center space-x-3">
               <div className="p-3 rounded-xl bg-gradient-to-br from-[#23b7d9] to-[#15d39e] text-white flex items-center justify-center">
                      <Activity size={26} strokeWidth={2.5} />
                    </div>
              <h2 className="text-2xl font-semibold text-gray-800">PhysioCare</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Connecting patients with verified physiotherapists for personalized
              offline therapy sessions and recovery tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-60">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 ml-20">
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>support@physiocare.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon-Sat: 8AM - 8PM</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PhysioCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
