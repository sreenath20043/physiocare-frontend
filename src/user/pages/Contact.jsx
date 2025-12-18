import React, { useEffect, useRef } from "react";
import { Card, Button, TextInput, Textarea } from "flowbite-react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const infoCardsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      infoCardsRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoCardsRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#F7F9FC] overflow-hidden">
      <Header />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <h1 className="text-5xl font-bold">
          Get In <span className="text-[#0BB5FF]">Touch</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
        </p>
      </motion.section>

      {/* INFO CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Phone, title: "Phone", line1: "+91 98765 43210", line2: "Mon-Sat, 8AM-8PM" },
            { icon: Mail, title: "Email", line1: "support@physiocare.com", line2: "We’ll respond within 24hrs" },
            { icon: MapPin, title: "Location", line1: "123 Healthcare Ave", line2: "New York, NY 10001" },
            { icon: Clock, title: "Working Hours", line1: "Monday - Saturday", line2: "8:00 AM - 8:00 PM" },
          ].map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => (infoCardsRef.current[i] = el)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl p-8 text-center border bg-gray-50 shadow-sm hover:shadow-lg"
            >
              <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0BB5FF] to-[#15D39E]">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-700">{item.line1}</p>
              <p className="text-gray-500 text-sm">{item.line2}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FORM + INFO */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* FORM */}
        <motion.div
          ref={formRef}
          className="bg-gray-50 rounded-2xl shadow-md p-8 border"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Send us a Message
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Full Name *</label>
              <TextInput color="white" placeholder="Name" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Email *</label>
                <TextInput color="white" placeholder="Gmail" />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Phone Number</label>
                <TextInput color="white" placeholder="Number" />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">Subject *</label>
              <TextInput color="white" placeholder="What is this regarding?" />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">Message *</label>
              <Textarea color="white" rows={6} placeholder="Tell us more about your inquiry..." />
            </div>

            <motion.div whileHover={{ scale: 1.03 }}>
              <Button className="w-full text-lg font-semibold rounded-xl bg-gradient-to-r from-[#08BFE4] to-[#15D39E]">
                Send Message
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Contact Us?</h2>
            <p className="text-gray-600">
              Whether you're booking a session or need help, our team is ready to assist.
            </p>
          </div>

          <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Quick Response Time</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Email: Within 24 hours</li>
              <li>• Phone: During business hours</li>
              <li>• Form: Within 12–24 hours</li>
            </ul>
          </div>

          <div className="bg-[#E9FAFB] border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Prefer to Talk?</h3>
            <Button className="w-full flex items-center justify-center gap-2 bg-white">
              <Phone className="text-[#0BB5FF]" /> Call +91 98765 43210
            </Button>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">FAQ</h3>
            <p className="font-semibold">How do I book a session?</p>
            <p className="text-gray-600 mb-4">Browse therapists, select a time, and confirm.</p>
            <p className="font-semibold">Can I cancel or reschedule?</p>
            <p className="text-gray-600">Yes, up to 24 hours before.</p>
          </div>
        </motion.div>
      </div>

      {/* MAP */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-10 pb-20"
      >
        <Card className="py-20 text-center bg-white!">
          <MapPin className="w-16 h-16 mx-auto text-[#0BB5FF]" />
          <h3 className="mt-4 text-xl font-semibold">Physiocare</h3>
          <p className="text-gray-500 mt-2">Map integration coming soon</p>
        </Card>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
