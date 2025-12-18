// src/pages/FindTherapist.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  FaSearch, FaFilter, FaStar, FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import { HiCheckCircle } from "react-icons/hi";
import Header from '../../components/Header';
import { CheckCircle, X } from "lucide-react";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Button, Modal } from "flowbite-react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AllDoctors = () => {

  const [openModal, setOpenModal] = useState(false);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mt-10"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Find Your Physiotherapist
            </h1>
            <p className="text-xl text-gray-600">
              Browse our network of verified and experienced therapists
            </p>
          </div>
        </motion.div>

        {/* SEARCH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm mb-10 max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                placeholder="Search by name or specialty..."
              />
            </div>

            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-4">
              <FaFilter className="text-gray-400 mr-2" />
              <select className="bg-transparent py-3 focus:outline-none">
                <option>All Specialties</option>
                <option>Sports</option>
                <option>Neuro</option>
                <option>Ortho</option>
                <option>Geriatric</option>
              </select>
            </div>

            <Button className="px-8 bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
          </div>
        </motion.div>

        {/* BOOKINGS */}
        <Link to="/bookingstatus">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center mb-10"
          >
            <button className="flex items-center gap-2 bg-[#0BB5FF] text-white font-semibold px-6 py-3 rounded-full shadow-md">
              <CheckCircle size={18} />
              View My Bookings
            </button>
          </motion.div>
        </Link>

        {/* DOCTOR CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[1].map((_, i) => (
            <motion.div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border"
            >
              <div className="relative h-52">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600"
                  className="h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> 4.9
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold flex gap-1">
                  Dr. Sarah Chen (PT)
                  <HiCheckCircle className="text-blue-500" />
                </h2>

                <p className="text-cyan-600 mt-1">Sports Injury Rehabilitation</p>

                <div className="mt-3 space-y-2 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <FaMapMarkerAlt /> Downtown Clinic
                  </div>
                  <div className="flex gap-2">
                    <FaClock /> Mon–Fri: 9AM–6PM
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <span className="bg-green-100 px-3 py-1 rounded-full text-xs">
                    12+ years exp
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                    245 reviews
                  </span>
                </div>

                <div className="flex gap-3 mt-5">
                  <Button
                    onClick={() => setOpenModal(true)}
                    className="flex-1 bg-cyan-600"
                  >
                    View Profile
                  </Button>

                  <Link to="/booking/:id">
                    <button className="px-6 py-2 border rounded-lg">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <Modal
          show={openModal}
          size="7xl"
          onClose={() => setOpenModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white rounded-xl"
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
            >
              <X size={20} />
            </button>

            <div className="p-0 bg-white rounded-xl overflow-hidden"
            > <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 flex flex-col items-center border-r">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300" alt="Doctor" className="rounded-xl w-full object-cover" />
                  <div className="w-full mt-6 p-6 text-center border rounded-xl">
                    <h2 className="text-3xl font-bold text-[#0BB5FF]">$150</h2>
                    <p className="text-gray-500">Per Session</p>
                    <Link to={'/booking/:id'}>
                      <Button className="w-full mt-4 bg-gradient-to-r from-[#0BB5FF] to-[#15D39E] text-white font-semibold"> Book Appointment </Button>
                    </Link>
                    <Button onClick={() => setOpenModal(false)} className="w-full mt-3 border text-[#0BB5FF] bg-white"> View Other Doctors </Button>
                  </div>
                </div>
                {/* RIGHT SIDE – DETAILS */}
                <div className="md:col-span-2 p-8 space-y-6">
                  <div> <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-bold">Dr. Sarah Chen</h2>
                    <span className="text-blue-500">✔</span>
                  </div>
                    <p className="text-lg text-[#0BB5FF]"> Sports Injury Rehabilitation </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full"> 12+ years experience </span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full"> 245 reviews </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600">Downtown Clinic, San Francisco</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Availability</h4>
                      <p className="text-gray-600">Mon–Fri: 9AM–6PM</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Languages</h4>
                      <p className="text-gray-600">English, Mandarin</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Session Types</h4>
                      <p className="text-gray-600">In-Person, Online</p> </div>
                  </div>
                  {/* About Section */}
                  <div className="pt-6">
                    <h3 className="font-bold text-lg">About</h3>
                    <p className="text-gray-700 leading-relaxed"> Dr. Sarah Chen specializes in sports injury rehabilitation with over 12 years of experience helping athletes recover and return to peak performance. She uses evidence-based treatments and personalized care plans. </p>
                  </div>
                  {/* Education */}
                  <div className="pt-6">
                    <h3 className="font-bold text-lg">Education</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✔ DPT – University of California, San Francisco</li> <li>✔ MS in Sports Medicine – Stanford University</li> <li>✔ Certified Orthopedic Manual Therapist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </Modal>
        <Footer />
      </div>
    </>
  );
};

export default AllDoctors;
