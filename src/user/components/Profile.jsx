import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Label,
  TextInput,
  Avatar,
} from "flowbite-react";
import { PiPassword } from "react-icons/pi";
import {
  HiUser,
  HiMail,
  HiCamera,
  HiArrowLeft,
  HiSave,
} from "react-icons/hi";
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { updateUserAPI } from '../../../services/allAPIs';
import { toast, ToastContainer } from 'react-toastify';


function Profile() {

  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [initialData, setInitialData] = useState({})
  
 const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
  });
  
  // Load current user data
  useEffect(() => {
    const loadUserData = () => {
      const storedToken = sessionStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        
        // Try to get user data from sessionStorage (stored during login)
        const existingUser = sessionStorage.getItem("existingUser");
        if (existingUser) {
          try {
            const user = JSON.parse(existingUser);
            const userData = {
              username: user.username || "",
              email: user.email || "",
              password: "", // Don't pre-fill password for security
              profile: user.profile || "",
            };
            setUserDetails(userData);
            setInitialData(userData);
          } catch (error) {
            console.log("Error parsing user data:", error);
          }
        }
      }
    };
    
    loadUserData();
  }, []);

  // update
    const handleUpdate = async () => {
      if (!userDetails.username || !userDetails.email) {
        toast.error("Please fill in all required fields");
        return;
      }
      
      setLoading(true);
      const updatedToken = token ? token.replace(/"/g, "") : "";
      const reqHeader = {
        Authorization: `Bearer ${updatedToken}`,
        'Content-Type': 'application/json'
      };
      
      const updateData = {
        username: userDetails.username,
        email: userDetails.email,
      };
      
      if (userDetails.password) {
        updateData.password = userDetails.password;
      }
      
      if (userDetails.profile) {
        updateData.profile = userDetails.profile;
      }
      
      try {
        const response = await updateUserAPI(updateData, reqHeader);
        if (response.status === 200) {
          toast.success("Update successfully");
          setInitialData(updateData);
          
          const existingUser = sessionStorage.getItem("existingUser");
          if (existingUser) {
            try {
              const user = JSON.parse(existingUser);
              const updatedUser = {
                ...user,
                username: userDetails.username,
                email: userDetails.email,
                profile: userDetails.profile || user.profile,
              };
              sessionStorage.setItem("existingUser", JSON.stringify(updatedUser));
            } catch (error) {
              console.log("Error updating sessionStorage:", error);
            }
          }
          
          setUserDetails(prev => ({ ...prev, password: "" }));
        } else {
          toast.error("Error in update...");
        }
      } catch (error) {
        console.log(error);
        toast.error("Error updating profile");
      } finally {
        setLoading(false);
      }
    }
    
   
  
    useEffect(() => setToken(sessionStorage.getItem("token")), [token]);
  

  return (
    
    <>
     {/* <Header /> */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
  
         <Link to={'/'}>
            <Button  color="light" className="flex mb-4 items-center gap-2">
              <HiArrowLeft className="h-5 w-5" />
              Back
            </Button>
         </Link>
  
          <Card className=''>
            <div className="flex flex-col items-center  text-center space-y-2">
              <div className="relative">
                <Avatar
                  img={userDetails.profile}
                  rounded
                  size="xl"
                />
              
              </div>
  
              <h2 className="text-2xl text-white font-semibold">{userDetails.username}</h2>
              <p className="text-white!">{userDetails.email}</p>
            </div>
          </Card>
  
          <Card className=''>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <p className="text-sm text-gray-500">
                  Manage your account details
                </p>
              </div>
  
            </div>
  
  
            <div className="space-y-5 mt-6">
                <div>
                <Label value="Full Name" />
                <TextInput
                  icon={HiUser}
                  placeholder="Your full name"
                  value={userDetails.username}
                  onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                />
              </div>
  
              <div>
                <Label value="Email Address" />
                <TextInput
                  icon={HiMail}
                  type="email"
                  placeholder="your@email.com"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}              
                />
              </div>

              <div className="mb-5">
                 <Label htmlFor="password" value="Password" className="mb-2 block" />
                 <TextInput
                 icon={PiPassword}
                   id="password"
                   type="password"
                   value={userDetails.password}
                   onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                    placeholder="password"
                 />
               </div>
  
              <div>
                <Label value="Profile Photo" />
                <TextInput
                  icon={HiCamera}
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  className="w-full"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setUserDetails({ ...userDetails, profile: URL.createObjectURL(file) });
                    }
                  }}
                />
              </div>
  
              <div className="flex gap-3 pt-2">
                <Button 
                  onClick={handleUpdate} 
                  color="blue" 
                  className="flex items-center gap-2"
                  disabled={loading}
                  isProcessing={loading}
                >
                  <HiSave className="h-4 w-4" />
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
               
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* <Footer /> */}
            <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </>

  )
}

export default Profile