import { Card, Button } from "flowbite-react";
import {
  FaBone,
  FaBrain,
  FaHeart,
  FaChild,
  FaUsers,
  FaRunning,
  FaHandsHelping,
  FaWheelchair,
  FaCheckCircle,
} from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaBone size={40} className="text-white" />,
    title: "Orthopedic Physiotherapy",
    desc: "Treatment for musculoskeletal conditions, sports injuries, fractures, and post-surgical rehabilitation.",
    points: ["Sports injury recovery", "Joint pain management", "Post-surgical rehabilitation", "Spinal cord treatment"],
  },
  {
    icon: <FaBrain size={40} className="text-white" />,
    title: "Neurological Physiotherapy",
    desc: "Specialized care for patients with neurological conditions affecting movement and function.",
    points: ["Stroke rehabilitation", "Parkinson's management", "Multiple sclerosis care", "Balance and coordination"],
  },
  {
    icon: <FaHeart size={40} className="text-white" />,
    title: "Cardiopulmonary Therapy",
    desc: "Rehabilitation for heart and lung conditions to improve cardiovascular and respiratory function.",
    points: ["Post-cardiac surgery", "Breathing exercises", "Endurance training", "Respiratory conditions"],
  },
  {
    icon: <FaChild size={40} className="text-white" />,
    title: "Pediatric Physiotherapy",
    desc: "Specialized treatment for children with developmental, neurological, or orthopedic conditions.",
    points: ["Developmental delays", "Cerebral palsy care", "Congenital conditions", "Growth disorders"],
  },
  {
    icon: <FaUsers size={40} className="text-white" />,
    title: "Geriatric Physiotherapy",
    desc: "Age-specific care focused on maintaining mobility, independence, and quality of life for seniors.",
    points: ["Fall prevention", "Arthritis management", "Mobility improvement", "Balance training"],
  },
  {
    icon: <FaRunning size={40} className="text-white" />,
    title: "Sports Physiotherapy",
    desc: "Performance optimization and injury prevention for athletes of all levels.",
    points: ["Performance enhancement", "Injury prevention", "Quick recovery", "Strength training"],
  },
  {
    icon: <FaHandsHelping size={40} className="text-white" />,
    title: "Manual Therapy",
    desc: "Hands-on techniques to diagnose and treat soft tissue and joint problems.",
    points: ["Pain relief", "Improved mobility", "Muscle relaxation", "Joint mobilization"],
  },
  {
    icon: <FaWheelchair size={40} className="text-white" />,
    title: "Rehabilitation Programs",
    desc: "Comprehensive programs designed for complete recovery and functional restoration.",
    points: ["Personalized plans", "Progress tracking", "Home exercise programs", "Long-term support"],
  },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#F7FBFF] overflow-hidden">
      <Header />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-24"
      >
        <h2 className="text-5xl font-bold text-gray-800">
          Our <span className="text-[#0BB5FF]">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
          Comprehensive physiotherapy services tailored to your unique recovery needs.
        </p>
      </motion.section>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-12 mt-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="!bg-gray-50 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto bg-gradient-to-b from-[#25B7DA] to-[#15D39E] mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mb-6">
                {service.desc}
              </p>

              <ul className="space-y-2 text-gray-700">
                {service.points.map((p, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <FaCheckCircle className="text-[#08C3AA]" /> {p}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* PROCESS */}
      <section className="mt-32 text-center">
        <h2 className="text-5xl font-bold text-gray-800">
          Our <span className="text-[#0BB5FF]">Treatment Process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 px-10">
          {["Initial Assessment", "Treatment Plan", "Regular Sessions", "Progress Tracking"].map(
            (step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="rounded-3xl border shadow-sm p-8 !bg-gray-50">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#25B7DA] to-[#15D39E] mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {i + 1}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mt-6">{step}</h4>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-32 py-24 bg-gradient-to-r from-[#0BB5FF] to-[#15D39E] text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-4">
          Have Questions About Our Services?
        </h2>
        <p className="text-lg mb-10">
          Our team is here to help you find the right treatment
        </p>

        <Link to="/contact">
          <div className="flex justify-center">
  <Button className="bg-white text-[#08BFE4] font-bold text-lg rounded-full px-10 py-3">
    Contact Us Today
  </Button>
</div>

        </Link>
      </motion.section>

      <Footer />
    </div>
  );
}
