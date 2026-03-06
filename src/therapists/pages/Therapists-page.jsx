import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import TherapistsHeader from '../components/Therapists-Header'
import Footer from '../../components/Footer'
import { TabItem, Tabs, Card, Badge } from "flowbite-react";
import {
  FaCalendarAlt,
  FaClock,
  FaCheck,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Modal, Avatar, Button } from "flowbite-react";
// import { HiX, HiCalendar, HiClock } from "react-icons/hi";
// import { FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { X } from 'lucide-react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getAllBookingAPI, getAllDoctorsAPI, getDoctorByIdAPI, getDoctorBookingsAPI } from '../../../services/allAPIs';

gsap.registerPlugin(ScrollTrigger);

function Therapistspage() {

  const { id } = useParams()
  const [openModal, setOpenModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [currentDoctor, setCurrentDoctor] = useState(null)
  const [doctors, setDoctors] = useState([]);
  const [doctorBookings, setDoctorBookings] = useState([]);

  const statCardsRef = useRef([]);
  const bookingCardRef = useRef([]);
  const doctorCardsRef = useRef([]);

  // header name
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await getDoctorByIdAPI(id)
        if (response.status === 200) {
          setCurrentDoctor(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (id) fetchDoctor()
  }, [id])


  //all doctor
  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const response = await getAllDoctorsAPI()
        if (response.status === 200) {
          setDoctors(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllDoctors()
  }, [id])

  //all booking
  useEffect(() => {
    console.log("Starting fetchDoctorBookings...");
    const fetchDoctorBookings = async () => {
      try {
        const token = sessionStorage.getItem("token");
        console.log("Token from sessionStorage:", token);
        if (!token) {
          console.log("No token found for doctor bookings");
          return;
        }
        
        const cleanedToken = token.replace(/"/g, "");
        console.log("Calling getDoctorBookingsAPI...");
        const response = await getDoctorBookingsAPI(cleanedToken)
        console.log("API response:", response);
        if (response.status === 200) {
          setDoctorBookings(response.data)
          console.log("Doctor bookings fetched:", response.data);
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchDoctorBookings()
  }, [id])

  const acceptedPatients = doctorBookings.filter(
    (booking) => booking.status === "Accepted"
  );

  const handleAccept = (index) => {
    const updated = [...doctorBookings];
    updated[index].status = "Accepted";
    setDoctorBookings(updated);
  };

  return (
    <div className="overflow-hidden">
      <TherapistsHeader doctor={currentDoctor} />

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto px-4">
        {[
          { icon: <FaCalendarAlt />, count: doctorBookings.length, label: "Pending Requests", bg: "bg-blue-100", color: "text-blue-600" },
          { icon: <FaCheck />, count: acceptedPatients.length, label: "Accepted", bg: "bg-green-100", color: "text-green-600" },
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -6 }}>
            <Card className="rounded-2xl bg-white! w-full">
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.bg}`}>
                  <span className={`${item.color} text-xl`}>{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.count}</h3>
                  <p className="text-gray-500">{item.label}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* TABS */}
      <div className="flex justify-center mt-6 px-4">
        <Tabs variant="pills" className="gap-2 w-full max-w-6xl">

          {/* BOOKINGS */}
          <TabItem active title="Bookings">
            <div className="space-y-8">
              {doctorBookings.length === 0 ? (
                <Card className="rounded-2xl bg-white! w-full">
                  <h2 className="text-2xl font-semibold mb-5">No Bookings Yet</h2>
                  <p>You haven't received any booking requests yet.</p>
                </Card>
              ) : (
                doctorBookings.map((booking, index) => (
                  <Card key={index} className="rounded-2xl bg-white! w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{booking.username}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                            <span className="flex gap-1"><FaCalendarAlt />{booking.date}</span>
                            <span className="flex gap-1"><FaClock />{booking.time}</span>
                          </div>
                          <Badge className="mt-2">{booking.session}</Badge>
                          <p className="text-sm text-gray-600 mt-1">Email: {booking.email}</p>
                          <p className="text-sm text-gray-600">Phone: {booking.number}</p>
                          <p className="text-sm text-gray-600">Description: {booking.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          onClick={() => handleAccept(index)}
                          className={`bg-white! border ${booking.status === "Pending"
                            ? "text-green-500! hover:bg-green-600! hover:text-white!"
                            : "text-gray-500!"
                            }`}
                          disabled={booking.status === "Accepted"}
                        >
                          {booking.status === "Pending" ? "Accept" : "Accepted"}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabItem>

          {/* MY PATIENTS */}
          <TabItem title="My Patients">
            <Card className="rounded-2xl bg-white! w-full mb-4">
              <h2 className="text-2xl font-semibold mb-6">My Patients</h2>

              {acceptedPatients.length === 0 ? (
                <p className="text-gray-500">No patients yet</p>
              ) : (
                acceptedPatients.map((patient, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border rounded-xl p-5 mb-4"
                  >
                    <div className="flex gap-4">
                      <Avatar size="lg" rounded />
                      <div>
                        <h3 className="text-lg font-semibold">{patient.username}</h3>
                        <p className="text-gray-500 text-sm">{patient.email}</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Next: {patient.date} at {patient.time}
                        </p>
                      </div>
                    </div>

                    <Button
                     onClick={() => {
                       setSelectedPatient(patient);
                       setOpenModal(true);
                     }}
                      className="bg-white! border hover:bg-blue-600! hover:text-white! text-black"
                    >
                      View Details
                    </Button>
                  </div>
                ))
              )}
            </Card>
          </TabItem>

          {/* OTHER DOCTORS */}
          <TabItem title="Other Doctors">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {doctors.map((doctor, i) => (
                <motion.div key={i} whileHover={{ y: -8 }}>
                  <Card className="rounded-2xl bg-white! text-center w-full">
                    <Avatar
                      img={doctor.profileImage
                        ? `http://localhost:3000/uploads/${doctor.profileImage}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-vJs-4Nsrp82zD1yTdth39lp-SB9POFzXw&s"}
                      size="xl"
                      rounded
                      className="mx-auto"
                    />
                    <h3 className="text-lg font-semibold mt-4">{doctor.username}</h3>
                    <Badge color="success" className="mt-2">{doctor.specialization}</Badge>
                    <div className="flex justify-center gap-2 mt-3 text-gray-500">
                      <FaMapMarkerAlt /> {doctor.location}
                    </div>
                    <p className="text-gray-500 mt-2">{doctor.experience} years experience</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabItem>

        </Tabs>
      </div>

             <Modal show={openModal} size="2xl" popup onClose={() => {
    setOpenModal(false);
    setSelectedPatient(null);
  }}>
  <div className="relative p-6 bg-white rounded-2xl">

    {/* Close Button */}
    <button
      onClick={() => setOpenModal(false)}
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
    >
      ✕
    </button>

    {/* Header */}
    <h2 className="text-xl font-semibold text-gray-800 mb-6">
      Patient Details
    </h2>

    {/* Patient Info */}
    <div className="flex items-center gap-4 mb-6">
      <Avatar size="lg" rounded />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {selectedPatient?.username || "Patient Name"}
        </h3>
        <p className="text-gray-500">
          {selectedPatient?.email || "patient@email.com"}
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Phone: {selectedPatient?.number || "N/A"}
        </p>
      </div>
    </div>

    {/* Upcoming Session Card */}
    <div className="bg-gray-100 rounded-xl p-5 mb-5">
      <h4 className="text-gray-600 font-medium mb-3">
        Upcoming Session
      </h4>

      <div className="flex items-center gap-6 text-gray-700 mb-4">
        <div className="flex items-center gap-2">
          <FaCalendarAlt /> {selectedPatient?.date || "N/A"}
        </div>
        <div className="flex items-center gap-2">
          <FaClock /> {selectedPatient?.time || "N/A"}
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {selectedPatient?.session || "N/A"}
          </span>
        </div>
      </div>

 
    </div>

    {/* Session Notes */}
    <div className="bg-gray-100 rounded-xl p-5">
      <h4 className="text-gray-600 font-medium mb-2">
        Session Notes
      </h4>
      <p className="text-gray-700">
        {selectedPatient?.description || "No description available"}
      </p>
    </div>

  </div>
</Modal>

            

      <Footer />
    </div>
  )
}

export default Therapistspage;