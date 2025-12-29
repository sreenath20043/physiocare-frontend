import React, { useEffect, useState } from "react";
import { User, Mail, Lock, Phone, MapPin, BookOpen, Stethoscope } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { doctorRegisterUserAPI } from "../../../services/allAPIs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Label, TextInput } from "flowbite-react";


const DoctorRegister = () => {

     const [token,setToken]=useState('')

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    specialization: "",
    experience: "",
    location: "",
    education: "",
    availability: "",
    session: "",
    fees: "",
    date:"",
    bio: "",
    profileImage: ""
  });

  const [profileImage, setProfileImage] = useState(null)

  const navigate = useNavigate()

  const formRegister = async () => {
    console.log(token);
    
    console.log(formData);
    if (!formData.username || !formData.email || !formData.password || !formData.number || !formData.specialization || !formData.experience || !formData.location || !formData.education || !formData.availability || !formData.session || !formData.fees || !formData.date || !formData.bio) {
      toast.warning("please fill the all fields", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      //call register user api
       const updatedToken = token.replace(/"/g,"")
      const reqHeader = {
        Authorization : `Bearer${updatedToken}`
      }

      try {
        const formDataToSend = new FormData();
        formDataToSend.append('username', formData.username);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
        formDataToSend.append('number', formData.number);
        formDataToSend.append('specialization', formData.specialization);
        formDataToSend.append('experience', formData.experience);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('education', formData.education);
        formDataToSend.append('availability', formData.availability);
        formDataToSend.append('session', formData.session);
        formDataToSend.append('fees', formData.fees);
        formDataToSend.append('date', formData.date);
        formDataToSend.append('bio', formData.bio);
        if (profileImage) {
          formDataToSend.append('profileImage', profileImage);
        }

        const response = await doctorRegisterUserAPI(formDataToSend,reqHeader);
        console.log(response);
        if (response.status == 201) {
          toast.success("Registration successfully", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          // set empty state values after registation done
          setFormData({ username: "", email: "", password: "", number: "", specialization: "", experience: "", location: "", education: "", availability: "", session: "", fees: "",date:"", bio: "" });
          setProfileImage(null);

          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          toast.error("Doctor already existing...", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          console.log(response.response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

    useEffect(()=>setToken(sessionStorage.getItem("token")))

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-4xl">

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Doctor Registration
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Create your professional account to start helping patients
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-gray-700 font-medium">Full Name *</label>
              <div className="flex items-center border rounded-lg p-3 mt-1">
                <User className="text-gray-500 mr-2" size={20} />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Name"
                  className="w-full outline-none"
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}

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
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}

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
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}

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
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}

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
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}

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
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}

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
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}

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
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, session: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
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
                  onChange={(e) => setProfileImage(e.target.files[0])}
                />
              </div>
            </div>



            <div>
              <label className="text-gray-700 font-medium">Date</label>

              <Label value="Preferred Date *" />
              <TextInput onChange={(e) => setFormData({ ...formData, date: e.target.value })}color='white' type="date" />
            </div>

          </form>

          <div className="mt-6">
            <label className="text-gray-700 font-medium">Professional Bio</label>
            <textarea
              name="bio"
              placeholder="Tell patients about your experience and approach..."
              className="border rounded-lg p-4 w-full mt-2 h-32"
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}

            ></textarea>
          </div>

          <button
            type="button"
            onClick={formRegister}
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
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </>
  );
};

export default DoctorRegister;
