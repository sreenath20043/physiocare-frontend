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
  return (
    <div className="bg-[#F7FBFF]">
      <Header/>
      <section className="text-center pt-24">
        <h2 className="text-5xl font-bold text-gray-800">
          Our <span className="text-[#0BB5FF]">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
          Comprehensive physiotherapy services tailored to your unique recovery needs. Our verified professionals specialize in various treatment areas.
        </p>
      </section>

      {/* Services list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-12 mt-20">
        {services.map((service, i) => (
          <Card key={i} className="!bg-gray-50 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto bg-gradient-to-b from-[#25B7DA] to-[#15D39E] mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center mb-6">{service.desc}</p>
            <ul className="space-y-2 text-gray-700">
              {service.points.map((p, idx) => (
                <li key={idx} className="flex gap-2 items-center">
                  <FaCheckCircle className="text-[#08C3AA]" /> {p}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Treatment Process */}
      <section className="mt-32 text-center">
        <h2 className="text-5xl font-bold text-gray-800">
          Our <span className="text-[#0BB5FF]">Treatment Process</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          A systematic approach to ensure the best outcomes for your recovery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 px-10">
          {["Initial Assessment", "Treatment Plan", "Regular Sessions", "Progress Tracking"].map(
            (step, i) => (
              <Card key={i} className="rounded-3xl border shadow-sm p-8 !bg-gray-50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#25B7DA] to-[#15D39E] mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  {i + 1}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mt-6">{step}</h4>
              </Card>
            )
          )}
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="mt-32 px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            What Makes Our Services Special?
          </h2>

          {[
            "Evidence-Based Treatment",
            "Personalized Care Plans",
            "Continuous Support",
            "Flexible Scheduling",
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-6 items-start">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#25B7DA] to-[#15D39E]">
                <FaCheckCircle size={30} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{item}</h4>
                <p className="text-gray-600">
                  {[
                    "All our therapies are backed by latest research and proven techniques",
                    "Every treatment is customized to your specific condition and goals",
                    "Stay connected with your therapist between sessions",
                    "Book sessions at times that work best for your schedule",
                  ][i]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Card className="rounded-3xl shadow-md border p-10 flex flex-col justify-between !bg-gray-50">
          <h2 className="text-center text-3xl font-bold text-gray-800">Ready to Begin?</h2>
          <p className="text-center text-gray-600 mt-2">
            Take the first step towards your recovery journey today
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            {[
              "Free initial consultation",
              "Detailed assessment and diagnosis",
              "Personalized treatment plan",
              "Progress tracking tools",
              "Direct therapist communication",
            ].map((v, i) => (
              <p key={i} className="flex gap-2 items-center">
                <FaCheckCircle className="text-[#08C3AA]" /> {v}
              </p>
            ))}
          </div>

          <Link to={"/alldoctors"}>
            <Button className="mt-10 py-3 text-lg font-semibold bg-gradient-to-r from-[#0BB5FF] to-[#15D39E] hover:opacity-90">
              Book Your First Session
            </Button>
          </Link>
        </Card>
      </section>

      {/* CTA BLOCK */}
      <section className="mt-32 py-24 bg-gradient-to-r from-[#0BB5FF] to-[#15D39E] text-center text-white">
  <h2 className="text-4xl font-bold mb-4">Have Questions About Our Services?</h2>
  <p className="text-lg mb-10">Our team is here to help you find the right treatment for your needs</p>

  <Link to={'/contact'}>
    <Button className="bg-white text-[#08BFE4] font-bold text-lg rounded-full hover:opacity-90 px-8 py-3 mx-auto flex justify-center items-center">
    Contact Us Today
  </Button>
  </Link>

</section>

      <Footer/>
    </div>
  );
}
