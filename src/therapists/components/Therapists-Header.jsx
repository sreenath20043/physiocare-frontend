import React from 'react'
import { Navbar, Button, Avatar } from "flowbite-react";
import { LogOut } from "lucide-react";
import { Link } from 'react-router-dom';

function TherapistsHeader() {
   return (
    <Navbar fluid  className="bg-white! border-b pt-4 pb-4">
      <div className="flex items-center gap-3 ml-4">
        <Avatar
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-vJs-4Nsrp82zD1yTdth39lp-SB9POFzXw&s"
          rounded
          size="md"
        />
        <div className="leading-tight">
          <h2 className="text-base font-semibold text-gray-900">
            Dr. Apuu Kuttan
          </h2>
          <p className="text-sm text-gray-500">
            Anxiety & Stress
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mr-6">
       <Link to={'/login'}>
            <Button 
              className="flex items-center gap-2
    bg-white! text-gray-800 border border-gray-300
    hover:bg-blue-600! hover:text-white! 
    transition-colors duration-300">
              <LogOut size={16} />
              Logout
            </Button>
       </Link>
      </div>
    </Navbar>
  );
}

export default TherapistsHeader