import { Card } from "flowbite-react";
import {
  Users,
  BadgeCheck,
  Activity,
  HeartPulse,
  Target,
  Award,
} from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";




const About = () => {
  return (
    <div className="bg-[#f8fbff]">
      
      <Header/>
      {/* Top Section */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About <span className="text-[#07b4da]">PhysioCare</span>
        </h1>
        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          We're on a mission to make quality physiotherapy accessible to everyone
          by connecting patients with verified professionals for personalized
          offline rehabilitation sessions.
        </p>
      </section>

      {/* Mission + Why Different */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Mission */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            PhysioCare was founded to bridge the gap between patients seeking
            rehabilitation and qualified physiotherapists who can help them
            recover.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our platform makes it easy to find, book, and manage appointments
            with verified professionals, while providing tools to track your
            recovery progress.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { label: "Accessibility", text: "Physiotherapy for everyone" },
              { label: "Quality", text: "Only verified & certified professionals" },
              { label: "Support", text: "Continuous care throughout your recovery" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#23b7d9] to-[#15d39e]"></span>
                <strong>{item.label}:</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Why We're Different */}
        <Card className="shadow-xl border-0 bg-gradient-to-b from-white to-[#ecfcff]">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Why We're Different
          </h3>
          <ul className="space-y-4 text-gray-600">
            <li>• Rigorous therapist verification process</li>
            <li>• Seamless booking and scheduling</li>
            <li>• Comprehensive progress tracking</li>
            <li>• Direct patient–therapist communication</li>
          </ul>
        </Card>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-[#0aa4dd] to-[#14d39c] text-white py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          {[
            ["50+", "Verified Therapists"],
            ["10,000+", "Happy Patients"],
            ["50,000+", "Sessions Completed"],
            ["98%", "Success Rate"],
          ].map(([num, label], i) => (
            <div key={i}>
              <p className="text-4xl font-bold">{num}</p>
              <p className="mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
          Our Core Values
        </h2>
        <p className="text-center text-gray-600 mt-3">
          These principles guide everything we do at PhysioCare
        </p>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">
  {[
    [HeartPulse, "Patient-Centered Care",
      "Every treatment plan is personalized to meet your unique recovery needs and goals."
    ],
    [Target, "Excellence in Service",
      "We maintain the highest standards in physiotherapy practice and patient care."
    ],
    [Award, "Verified Professionals",
      "All our physiotherapists are certified, experienced, and thoroughly vetted."
    ],
    [Users, "Community Focus",
      "Building a supportive community of patients and therapists working together."
    ],
  ].map(([Icon, title, desc], i) => (
    <Card
      key={i}
      className="!bg-gray-50 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center"
    >
      {/* Icon Gradient Box */}
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-b from-[#25B7DA] to-[#15D39E] mb-6">
        <Icon size={40} className="text-white" />
      </div>

      {/* Title */}
      <h4 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h4>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-[15px] max-w-[260px]">
        {desc}
      </p>
    </Card>

    
  ))}
</div>


      </section>

      {/* Join Network */}
      <section className="text-center px-6 py-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Join Our Growing Network
        </h2>
        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          Whether you're a patient seeking recovery or a physiotherapist looking
          to expand your practice, PhysioCare is the platform that connects us
          all.
        </p>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          We continue improving our platform, expanding our community, and
          building a healthier future — one session at a time.
        </p>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
