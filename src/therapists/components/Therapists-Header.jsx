import React, { useEffect, useState } from 'react'
import { Navbar, Button, Avatar } from "flowbite-react";
import { LogOut } from "lucide-react";
import { Link } from 'react-router-dom';
import { getAllDoctorsAPI } from '../../../services/allAPIs'

function TherapistsHeader({ doctor }) {

  const [doctors, setDoctors] = useState([])
  
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getAllDoctorsAPI()
        if (response.status === 200) {
          setDoctors(response.data)
        }
      } catch (error) {
        console.log('Error fetching doctors:', error)
      }
    }
    fetchDoctors()
  }, [])

  return (
    <Navbar fluid className="bg-white! border-b pt-4 pb-4 px-3 sm:px-6">
      
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 ml-0 sm:ml-4 text-center sm:text-left">
        <Avatar
          img={doctor?.profileImage 
            ? `http://localhost:3000/uploads/${doctor.profileImage}` 
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-vJs-4Nsrp82zD1yTdth39lp-SB9POFzXw&s"}
          rounded
          size="md"
        />
        <div className="leading-tight">
          <h2 className="text-base font-semibold text-gray-900">
            {doctor ? `Dr. ${doctor.username}` : "Dr. Loading..."}
          </h2>
          <p className="text-sm text-gray-500">
            {doctor?.specialization || "Specialization"}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center sm:justify-end gap-4 mr-0 sm:mr-6 mt-3 sm:mt-0">
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