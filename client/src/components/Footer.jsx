import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo2 from "../../src/Assets/logo2.png"

function Footer() {
  return (
    <footer className="bg-gray-100 py-10 ">
      <div className="max-w-7xl mx-auto px-6 ">


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
          {/* Logo and Social Links */}
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center">
            {/* Logo */}
            <h1 className="flex item-start">
              <span><img src={logo2} alt="" className='h-12' /></span>
            </h1>

            {/* Follow Us and Social Icons in one line */}
            <div className="flex items-center space-x-4 mt-4">
              {/* <p className="text-gray-600">Follow Us</p> */}
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-600 hover:text-blue-500">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-500">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-500">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-500">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>



          {/* Menu Links */}
          <div className="flex flex-col items-start ">
            <h3 className="text-lg font-medium text-gray-800">Menu</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-blue-500">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-blue-500">
                  Plan & Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-medium text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
      {/* Bottom Text */}
      <div className="mt-10 text-center text-gray-500">
        © Cumulus 2024
      </div>
    </footer>
  );
}

export default Footer;
