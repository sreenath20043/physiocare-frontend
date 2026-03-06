import React, { useEffect, useState } from 'react'
import { getAllDoctorsAPI, getAllBookingAPI, getAllUsersAPI } from '../../../services/allAPIs'
import { Card, Button } from "flowbite-react";
import {
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi";
import { Link, useParams } from 'react-router-dom';
import { LogOut } from 'lucide-react';

function AdminHeader() {

  const { id } = useParams()
  const [doctors, setDoctors] = useState([]);
  const [doctorBookings, setDoctorBookings] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const response = await getAllDoctorsAPI()
        if (response.status === 200) {
          setDoctors(response.data)
        }
      } catch (error) {
        console.log('Error fetching doctors:', error)
      }
    }
    fetchAllDoctors()
  }, [id])

  useEffect(() => {
    const fetchAllBooking = async () => {
      try {
        const response = await getAllBookingAPI()
        if (response.status === 200) {
          setDoctorBookings(response.data)
        }
      } catch (error) {
        console.log('Error fetching bookings:', error)
      }
    }
    fetchAllBooking()
  }, [id])

  useEffect(() => {
    const fetchAllPatients = async () => {
      try {
        const response = await getAllUsersAPI();
        if (response.status === 200) {
          setPatients(response.data);
        }
      } catch (error) {
        console.log('Error fetching patients:', error);
      }
    };
    fetchAllPatients();
  }, [id]);

  const stats = [
    {
      title: "Total booking",
      value: doctorBookings.length,
      icon: HiOutlineUserGroup,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Total Doctors",
      value: doctors.length,
      icon: HiOutlineUsers,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Total Patients",
      value: patients.length,
      icon: HiOutlineUsers,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
  ];

  return (
    <div>
      <div className="bg-gray-50 p-6 md:p-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <HiOutlineShieldCheck className="text-blue-600 text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-500">Welcome back, Admin User</p>
            </div>
          </div>

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

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {stats.map((item, index) => (
            <Card key={index} className="rounded-xl bg-white! w-full">
              <div className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 flex items-center justify-center rounded-full ${item.bg}`}
                >
                  <item.icon className={`${item.color} text-2xl`} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {item.value}
                  </h2>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AdminHeader