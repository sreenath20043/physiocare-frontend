import React, { useState } from "react";
import { User, Mail, Lock, Phone, MapPin, BookOpen, Stethoscope } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    specialization: "",
    experience: "",
    location: "",
    education: "",
    bio: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Registered:", formData);
  };

  return (
   <>
   <Header/>
      <div className="min-h-screen bg-white flex justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-4xl">
  
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Doctor Registration
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Create your professional account to start helping patients
          </p>
  
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
            <div>
              <label className="text-gray-700 font-medium">Full Name *</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <User className="text-gray-500 mr-2" size={20} />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Name"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div>
              <label className="text-gray-700 font-medium">Email *</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <Mail className="text-gray-500 mr-2" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div>
              <label className="text-gray-700 font-medium">Password *</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <Lock className="text-gray-500 mr-2" size={20} />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div>
              <label className="text-gray-700 font-medium">Phone Number</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <Phone className="text-gray-500 mr-2" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Number"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div>
              <label className="text-gray-700 font-medium">Specialization *</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <Stethoscope className="text-gray-500 mr-2" size={20} />
                <select
                  name="specialization"
                  className="w-full outline-none bg-white"
                  onChange={handleChange}
                >
                  <option>Select specialization</option>
                  <option>Cardiologist</option>
                  <option>Neurologist</option>
                  <option>Psychologist</option>
                  <option>Orthopedic</option>
                  <option>Pediatrician</option>
                </select>
              </div>
            </div>
  
            <div>
              <label className="text-gray-700 font-medium">Years of Experience</label>
              <input
                type="number"
                name="experience"
                placeholder="e.g., 10"
                className="border rounded-lg p-3 w-full mt-1"
                onChange={handleChange}
              />
            </div>
  
            <div>
              <label className="text-gray-700 font-medium">Location</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <MapPin className="text-gray-500 mr-2" size={20} />
                <input
                  type="text"
                  name="location"
                  placeholder="location"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>
  
            <div>
              <label className="text-gray-700 font-medium">Education</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <BookOpen className="text-gray-500 mr-2" size={20} />
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>

             <div>
              <label className="text-gray-700 font-medium">Availability</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <MapPin className="text-gray-500 mr-2" size={20} />
                <input
                  type="text"
                  name="Availability"
                  placeholder="Mon-Fri:9Am-6Pm"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>

             <div>
              <label className="text-gray-700 font-medium">Session Types</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <MapPin className="text-gray-500 mr-2" size={20} />
                <input
                  type="text"
                  name="Session Types"
                  placeholder="In Person,Online"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>

              <div>
              <label className="text-gray-700 font-medium">Fees</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <MapPin className="text-gray-500 mr-2" size={20} />
                <input
                  type="number"
                  name="Fees"
                  placeholder="Per Session"
                  className="w-full outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
  <label className="text-gray-700 font-medium">Profile Image</label>
  <div className="border rounded-lg p-3 mt-1 flex items-center justify-between">
    
    <input
      type="file"
      name="profileImage"
      accept="image/*"
      className="w-full"
      onChange={handleChange
      }
    />
  </div>
</div>
          </form>
  
          <div className="mt-6">
            <label className="text-gray-700 font-medium">Professional Bio</label>
            <textarea
              name="bio"
              placeholder="Tell patients about your experience and approach..."
              className="border rounded-lg p-4 w-full mt-2 h-32"
              onChange={handleChange}
            ></textarea>
          </div>
  
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white p-3 rounded-lg mt-8 text-lg font-semibold hover:bg-blue-700 transition"
          >
            Register as Doctor
          </button>
  
          <p className="text-center mt-4 text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-semibold">
              Sign in
            </a>
          </p>
        </div>
      </div>
      <Footer/>
   </>
  );
};

export default DoctorRegister;
