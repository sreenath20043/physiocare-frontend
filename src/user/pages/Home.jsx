import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Activity, Users, TrendingUp, Shield, Calendar } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <Header />

      <div className="w-full overflow-hidden">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-[#f7fcff] to-white py-14 sm:py-20 px-4 sm:px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">

          <motion.div
            className="max-w-xl text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
            >
              Your Journey to <span className="text-[#00b7cf]">Recovery</span> Starts Here
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg text-gray-600"
            >
              Connect with verified physiotherapists for personalized offline therapy sessions.
              Book appointments, track your progress, and achieve your rehabilitation goals.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <Link to="/alldoctors">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#00b7cf] to-[#16c79a] px-7 py-3 text-base sm:text-lg">
                  Book Appointment
                </Button>
              </Link>

              <Link to="/service">
                <Button outline gradientDuoTone="greenToBlue" className="w-full sm:w-auto px-7 py-3 text-base sm:text-lg">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* QUICK STATS CARD */}
          <div
            ref={statsRef}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] w-full max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="bg-gradient-to-br from-[#23b7d9] to-[#15d39e] p-3 sm:p-4 rounded-2xl text-white">
                <Activity size={26} className="sm:w-[30px] sm:h-[30px]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Quick Stats
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Your health at a glance
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-[#f6fafc] p-6 sm:p-8 rounded-2xl text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#14b8c4]">50+</p>
                <span className="text-gray-600 text-base sm:text-lg">Therapists</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-[#f6fafc] p-6 sm:p-8 rounded-2xl text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#14b8c4]">10k+</p>
                <span className="text-gray-600 text-base sm:text-lg">Patients</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SECTION */}
        <section className="py-14 sm:py-20 px-4 sm:px-8 md:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Why Choose PhysioCare?
          </motion.h2>

          <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
            We provide everything you need for a successful rehabilitation journey
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Users, title: "Verified Therapists", desc: "Connect with certified and experienced physiotherapists in your area" },
              { icon: Calendar, title: "Easy Booking", desc: "Schedule appointments at your convenience with instant confirmation" },
              { icon: TrendingUp, title: "Track Progress", desc: "Monitor your recovery journey with detailed tracking" },
              { icon: Shield, title: "Secure & Private", desc: "Your health data is protected with enterprise-grade security" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 !bg-gray-50 h-full">
                  <div className="flex flex-col space-y-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-400">
                      <item.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
<section className="py-14 sm:py-20 px-4 sm:px-8 md:px-20 bg-[#f9feff]">
  <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
    How It Works
  </h2>

  <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
    Getting started is easy. Follow these simple steps
  </p>

  <div className="flex flex-col md:flex-row items-center justify-center mt-12 sm:mt-14 gap-10 sm:gap-14">
    {[
      { step: "01", title: "Find a Therapist", desc: "Browse verified physiotherapists in your area" },
      { step: "02", title: "Book Session", desc: "Schedule an appointment at your convenience" },
      { step: "03", title: "Start Recovery", desc: "Begin your personalized rehabilitation journey" }
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center max-w-xs"
      >
        <div className="bg-gradient-to-r from-[#00b7cf] to-[#16c79a] text-white text-2xl sm:text-3xl font-bold w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
          {item.step}
        </div>

        <h4 className="text-lg sm:text-2xl font-semibold mt-4">
          {item.title}
        </h4>

        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>

        {/* CTA SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-14 sm:py-20 bg-gradient-to-r from-[#0582fe] to-[#16c79a] text-center text-white px-4 sm:px-6"
        >
          <motion.h2
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
          >
            Ready to Start Your Recovery?
          </motion.h2>

          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Join thousands of patients who have achieved their rehabilitation goals with PhysioCare
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
            <Link to="/alldoctors">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#27cbeb] to-[#16c79a] text-base sm:text-lg px-8 py-3 font-medium rounded-xl">
                Book Appointment
              </Button>
            </Link>

            <Link to="/about">
              <Button className="w-full sm:w-auto bg-white text-base sm:text-lg px-8 py-3 font-medium rounded-xl">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.section>

      </div>

      <Footer />
    </>
  );
};

export default Home;