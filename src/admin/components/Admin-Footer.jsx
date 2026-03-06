import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

function AdminFooter() {
  return (
    <footer className="bg-gray-50 border-t mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineShieldCheck className="text-blue-600 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-900 tracking-wide">
                PhysioCare <span className="text-blue-600">Admin</span>
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Administrative dashboard for managing doctors, patients,
              and platform settings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/admin/doctor-approvals" className="hover:text-blue-600">Doctor Approvals</Link></li>
              <li><Link to="/admin/users" className="hover:text-blue-600">User Management</Link></li>
              <li><Link to="/admin/settings" className="hover:text-blue-600">System Settings</Link></li>
              <li><Link to="/admin/reports" className="hover:text-blue-600">Reports</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Email: admin@physiocare.com</li>
              <li>Phone: +91 9747970032</li>
              <li className="hover:text-blue-600 cursor-pointer">Documentation</li>
              <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2025 PhysioCare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-blue-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-blue-600 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default AdminFooter;