import React, { useState, useEffect, useRef } from 'react'
import TherapistsHeader from '../components/Therapists-Header'
import Footer from '../../components/Footer'
import { Modal, TabItem, Tabs, Card, Avatar, Button, Badge } from "flowbite-react";
import {
  FaCalendarAlt,
  FaClock,
  FaCheck,
  FaTimes,
  FaFileAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Calendar, Clock, X } from 'lucide-react';

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Therapistspage() {

  const [openModal, setOpenModal] = useState(false);
  const [openModalT, setOpenModalT] = useState(false);

  const statCardsRef = useRef([]);
  const bookingCardRef = useRef([]);
  const doctorCardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      statCardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      bookingCardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bookingCardRef.current,
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(
      doctorCardsRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: doctorCardsRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  const doctors = [
    {
      name: "Dr. Vasu",
      specialty: "Depression",
      rating: "4.8",
      reviews: "234",
      location: "Kollam",
      experience: "15 years experience",
      image: "https://i.redd.it/sgl4et00hjua1.jpeg",
    },
    {
      name: "Dr. Mayavi",
      specialty: "Family Therapy",
      rating: "4.9",
      reviews: "189",
      location: "Kerala",
      experience: "10 years experience",
      image: "https://i.redd.it/p2hjt0om1lua1.png",
    },
    {
      name: "Dr. Kunjikuttan",
      specialty: "Trauma & PTSD",
      rating: "4.7",
      reviews: "312",
      location: "Kottayam",
      experience: "20 years experience",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqzh8znJnUe5Utsdaei2BsDOMQYZwyVlWRA&s",
    },
  ];

  return (
    <div className="overflow-hidden">
      <TherapistsHeader />

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
        {[
          { icon: <FaCalendarAlt />, count: 1, label: "Pending Requests", bg: "bg-blue-100", color: "text-blue-600" },
          { icon: <FaCheck />, count: 2, label: "Accepted", bg: "bg-green-100", color: "text-green-600" },
        ].map((item, i) => (
          <motion.div
            key={i}
            ref={(el) => (statCardsRef.current[i] = el)}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="rounded-2xl bg-white!">
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
      <div className="flex justify-center mt-6">
        <Tabs variant="pills" className="gap-2">

          {/* BOOKINGS */}
          <TabItem active title="Bookings">
            <div className="space-y-8">

              {/* PENDING */}
              <motion.div ref={(el) => (bookingCardRef.current[0] = el)}>
                <Card className="rounded-2xl bg-white!">
                  <h2 className="text-2xl font-semibold mb-5">
                    Pending Booking Requests
                  </h2>

                  <div className="flex items-center justify-between border rounded-xl p-5 w-200">
                    <div className="flex items-center gap-4">
                      <Avatar
                        img="https://preview.redd.it/malayalam-actors-who-does-comedy-and-their-iconic-your-v0-equt25pbgppf1.jpg"
                        size="lg"
                        rounded
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Ramesh</h3>
                        <div className="flex gap-4 text-sm text-gray-500 mt-1">
                          <span className="flex gap-1"><FaCalendarAlt />2025-12-10</span>
                          <span className="flex gap-1"><FaClock />10:00 AM</span>
                        </div>
                        <Badge className="mt-2">online</Badge>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => setOpenModal(true)} className="bg-white! border hover:bg-blue-600! hover:text-white!">
                        <FaFileAlt /> Details
                      </Button>

                      <Button className="bg-white! border text-green-500! hover:bg-green-600! hover:text-white!">
                        <FaCheck />
                      </Button>

                      <Button className="bg-white! border text-red-500! hover:bg-red-600! hover:text-white!">
                        <FaTimes />
                      </Button>
                    </div>
                  </div>

                    <div className="flex items-center justify-between border rounded-xl p-5 w-200">
                    <div className="flex items-center gap-4">
                      <Avatar
                        img="https://preview.redd.it/malayalam-actors-who-does-comedy-and-their-iconic-your-v0-equt25pbgppf1.jpg"
                        size="lg"
                        rounded
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Ramesh</h3>
                        <div className="flex gap-4 text-sm text-gray-500 mt-1">
                          <span className="flex gap-1"><FaCalendarAlt />2025-12-10</span>
                          <span className="flex gap-1"><FaClock />10:00 AM</span>
                        </div>
                        <Badge className="mt-2">online</Badge>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => setOpenModal(true)} className="bg-white! border hover:bg-blue-600! hover:text-white!">
                        <FaFileAlt /> Details
                      </Button>

                      <Button className="bg-white! border text-green-500! hover:bg-green-600! hover:text-white!">
                        <FaCheck />
                      </Button>

                      <Button className="bg-white! border text-red-500! hover:bg-red-600! hover:text-white!">
                        <FaTimes />
                      </Button>
                    </div>
                  </div>
                </Card>

                
              </motion.div>

              {/* ACCEPTED */}
              <motion.div ref={(el) => (bookingCardRef.current[1] = el)}>
                <Card className="rounded-2xl bg-white!">
                  <h2 className="text-2xl font-semibold mb-5">
                    Accepted Appointments
                  </h2>

                  <div className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-xl p-5">
                    <Avatar
                      img="https://preview.redd.it/malayalam-actors-who-does-comedy-and-their-iconic-your-v0-xwbrg6pbgppf1.jpg"
                      size="lg"
                      rounded
                    />
                    <div>
                      <h3 className="text-lg font-semibold">Soman</h3>
                      <div className="flex gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex gap-1"><FaCalendarAlt />2025-12-11</span>
                        <span className="flex gap-1"><FaClock />2:00 PM</span>
                      </div>
                      <Badge color="success" className="mt-2">In-Person</Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>

            </div>
          </TabItem>

          {/* MY PATIENTS */}
          <TabItem title="My Patients">
            <motion.div ref={(el) => (bookingCardRef.current[2] = el)}>
              <Card className="rounded-2xl bg-white! w-213">
                <h2 className="text-2xl font-semibold mb-6">My Patients</h2>

                <div className="flex items-center justify-between border rounded-xl p-5">
                  <div className="flex gap-4">
                    <Avatar
                      img="https://preview.redd.it/malayalam-actors-who-does-comedy-and-their-iconic-your-v0-qnok35pbgppf1.jpg"
                      size="lg"
                      rounded
                    />
                    <div>
                      <h3 className="text-lg font-semibold">Ramanen</h3>
                      <p className="text-gray-500 text-sm">ramanenl@gmail.com</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Next: 2025-12-11 at 2:00 PM
                      </p>
                    </div>
                  </div>

                  <Button onClick={() => setOpenModalT(true)} className="bg-white! border hover:bg-blue-600! hover:text-white!">
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          </TabItem>

          {/* OTHER DOCTORS */}
          <TabItem title="Other Doctors">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-213">
              {doctors.map((doctor, i) => (
                <motion.div
                  key={i}
                  ref={(el) => (doctorCardsRef.current[i] = el)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <Card className="rounded-2xl bg-white! text-center">
                    <Avatar img={doctor.image} size="xl" rounded className="mx-auto" />
                    <h3 className="text-lg font-semibold mt-4">{doctor.name}</h3>
                    <Badge color="success" className="mt-2">{doctor.specialty}</Badge>
                    <div className="flex justify-center gap-2 mt-3 text-gray-500">
                      <FaMapMarkerAlt /> {doctor.location}
                    </div>
                    <p className="text-gray-500 mt-2">{doctor.experience}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabItem>

        </Tabs>
      </div>

      <Footer />
    </div>
  )
}

export default Therapistspage;
