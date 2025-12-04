import React from "react";
import { Card, Button, Label, TextInput, Textarea } from "flowbite-react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#F7F9FC]">
        <Header/>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">
          Get In <span className="text-[#0BB5FF]">Touch</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
        </p>
      </section>

      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 mb-20">
        
        <Card className="text-center py-6 !bg-gray-50">
          <Phone className="w-12 h-12 mx-auto text-[#0BB5FF]" />
          <h3 className="font-semibold text-lg mt-2">Phone</h3>
          <p className="text-gray-700">+1 (555) 123-4567</p>
          <p className="text-gray-500 text-sm">Mon-Sat, 8AM-8PM</p>
        </Card>

        <Card className="text-center py-6 !bg-gray-50">
          <Mail className="w-12 h-12 mx-auto text-[#0BB5FF]" />
          <h3 className="font-semibold text-lg mt-2">Email</h3>
          <p className="text-gray-700">support@physiocare.com</p>
          <p className="text-gray-500 text-sm">We’ll respond within 24hrs</p>
        </Card>

        <Card className="text-center py-6 !bg-gray-50">
          <MapPin className="w-12 h-12 mx-auto text-[#0BB5FF]" />
          <h3 className="font-semibold text-lg mt-2">Location</h3>
          <p className="text-gray-700">123 Healthcare Ave</p>
          <p className="text-gray-500 text-sm">New York, NY 10001</p>
        </Card>

        <Card className="text-center py-6 !bg-gray-50">
          <Clock className="w-12 h-12 mx-auto text-[#0BB5FF]" />
          <h3 className="font-semibold text-lg mt-2">Working Hours</h3>
          <p className="text-gray-700">Monday - Saturday</p>
          <p className="text-gray-500 text-sm">8:00 AM - 8:00 PM</p>
        </Card>

      </div> */}

        <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-gray-50! rounded-2xl  p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl 
            bg-gradient-to-br from-[#0BB5FF] to-[#15D39E]">
            <Phone className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-1">Phone</h3>
          <p className="text-gray-700"> +91 98765 43210</p>
          <p className="text-gray-500 text-sm">Mon-Sat, 8AM-8PM</p>
        </div>

        <div className="bg-gray-50! rounded-2xl  p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl 
            bg-gradient-to-br from-[#0BB5FF] to-[#15D39E]">
            <Mail className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-1">Email</h3>
          <p className="text-gray-700">support@physiocare.com</p>
          <p className="text-gray-500 text-sm">We’ll respond within 24hrs</p>
        </div>

        <div className="bg-gray-50! rounded-2xl  p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl 
            bg-gradient-to-br from-[#0BB5FF] to-[#15D39E]">
            <MapPin className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-1">Location</h3>
          <p className="text-gray-700">123 Healthcare Ave</p>
          <p className="text-gray-500 text-sm">New York, NY 10001</p>
        </div>

        <div className="bg-gray-50! rounded-2xl  p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl 
            bg-gradient-to-br from-[#0BB5FF] to-[#15D39E]">
            <Clock className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-1">Working Hours</h3>
          <p className="text-gray-700">Monday - Saturday</p>
          <p className="text-gray-500 text-sm">8:00 AM - 8:00 PM</p>
        </div>

      </div>
    </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mb-20">

        <Card className="p-8 shadow-md !bg-gray-50">
          <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

          <div className="mb-4">
            <Label value="Full Name *" />
            <TextInput placeholder="John Doe" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label value="Email *" />
              <TextInput placeholder="john@example.com" required />
            </div>
            <div>
              <Label value="Phone Number" />
              <TextInput placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div className="mb-4">
            <Label value="Subject *" />
            <TextInput placeholder="What is this regarding?" required />
          </div>

          <div className="mb-6">
            <Label value="Message *" />
            <Textarea rows={5} placeholder="Tell us more about your inquiry..." required />
          </div>

          <Button className="w-full bg-gradient-to-r from-[#0BB5FF] to-[#15D39E] text-white font-semibold text-lg">
            Send Message
          </Button>
        </Card>

        <div>
          <h2 className="text-3xl font-bold mb-6">Why Contact Us?</h2>

          <p className="text-gray-600 mb-6">
            Whether you're looking to book your first session, have questions about our services,
            or need assistance with your account, our team is ready to help.
          </p>

          <Card className="p-6 mb-6 !bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Quick Response Time</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Email: Within 24 hours</li>
              <li>• Phone: During business hours</li>
              <li>• Form: Within 12–24 hours</li>
            </ul>
          </Card>

          <Card className="p-6 mb-6 bg-cyan-50!">
            <h3 className="text-xl font-semibold mb-4">Prefer to Talk?</h3>
            <Button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700">
              <Phone className="w-5 h-5 text-[#0BB5FF]" />
              Call +1 (555) 123-4567
            </Button>
          </Card>

          <Card className="p-6 !bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <p className="font-semibold mt-3">How do I book a session?</p>
            <p className="text-gray-600 mb-4">Browse therapists, select a time, and confirm your booking.</p>

            <p className="font-semibold">Can I cancel or reschedule?</p>
            <p className="text-gray-600">Yes, up to 24 hours before your appointment.</p>
          </Card>
        </div>
      </div> */}

       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      
   
      <div className="bg-gray-50! rounded-2xl shadow-md p-8 border">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Send us a Message
        </h2>

        <div className="space-y-6">
        
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Full Name *</label>
            <TextInput  color='white' placeholder="Name" />
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Email *</label>
              <TextInput color="white" placeholder="Gmail"  />
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

         
          <Button
            className="w-full text-white font-semibold text-lg rounded-xl 
              bg-gradient-to-r from-[#08BFE4] to-[#15D39E] hover:opacity-90"
          >
            Send Message
          </Button>
        </div>
      </div>

      {/* RIGHT SIDE INFO */}
      <div className="space-y-8">

        {/* WHY CONTACT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Contact Us?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re looking to book your first session, have questions 
            about our services, or need assistance with your account, our team is ready to help.
          </p>
        </div>

        {/* QUICK RESPONSE */}
        <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Response Time</h3>

          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Email:</strong> Within 24 hours</li>
            <li>• <strong>Phone:</strong> During business hours</li>
            <li>• <strong>Form:</strong> Within 12–24 hours</li>
          </ul>
        </div>

        {/* PREFER TO TALK */}
        <div className="bg-[#E9FAFB] border rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Prefer to Talk?</h3>

          <p className="text-gray-700 mb-4">
            Call us directly for immediate assistance with bookings or urgent inquiries.
          </p>

          <Button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700">
              <Phone className="w-5 h-5 text-[#0BB5FF]" />
              Call +91 98765 43210
            </Button>
        </div>

        {/* FAQ */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">FAQ</h3>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold">How do I book a session?</p>
              <p>Browse therapists, select a time, and confirm your booking.</p>
            </div>

            <div>
              <p className="font-semibold">Can I cancel or reschedule?</p>
              <p>Yes, up to 24 hours before your appointment.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

      <div className="px-10 pb-20">
        <Card className="py-20 text-center bg-gray-50!">
          <MapPin className="w-16 h-16 mx-auto text-[#0BB5FF]" />
          <h3 className="mt-4 text-xl font-semibold">
            123 Healthcare Ave, New York, NY 10001
          </h3>
          <p className="text-gray-500 mt-2">Map integration coming soon</p>
        </Card>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
