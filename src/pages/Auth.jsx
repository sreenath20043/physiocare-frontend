import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import Particles from '../reactbits/Particles';
import { Activity } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import { GoogleloginUserAPI, loginUserAPI, registerUserAPI } from "../../services/allAPIs";
import {useNavigate} from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'

function Auth({register}) {
  console.log(register);

   //create a state to hold userdata
  const [userData,setUserData]= useState({'username':'','email':'','password':''})
   
  const navigate = useNavigate()
  //register
  const handleRegister = async () => {
    console.log(userData);
    if (!userData.username || !userData.email || !userData.password) {
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
      try {
        const response = await registerUserAPI(userData);
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

          setUserData({ username: "", email: "", password: "" });

          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          toast.error("User already existing...", {
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

    //login
 const handleLogin = async () => {
    if (!userData.email || !userData.password) {
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
      try {
        const response = await loginUserAPI(userData);
        console.log(response);
        if (response.status == 200) {
          sessionStorage.setItem("userDetails",JSON.stringify(response.data.user));
             sessionStorage.setItem( "token", JSON.stringify(response.data.token));
          
          toast.success("Login successfully", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
           
          

          if(response.data?.user?.role == "physiocareAdmin") {
            setTimeout(() => {
              navigate("/adminpage");
            }, 4000);
          }else if(response.data?.user?.role == "physiocareDoctor"){
               setTimeout(() => {
              navigate(`/therapistspage/${response.data.user._id}`);
            }, 4000);
          }
           else {
            setTimeout(() => {
              navigate("/");
            }, 4000);
          }

          // set empty state values after registation done 
          setUserData({ 'email': "", 'password': "" });
        } else {
          toast.error("Invalid user details", {
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

    //google login
 const handleGoogleLogin = async (credentialResponse) => {
    console.log("google login", credentialResponse);
    const decode = jwtDecode(credentialResponse.credential);
    console.log(decode);

    const response = await GoogleloginUserAPI({
      email: decode.email,
      password: "google",
      username: decode.name,
      profile: decode.picture,
    });
    console.log(response);
    if (response.status == 200) {
      sessionStorage.setItem("userDetails", JSON.stringify(response.data.user));
           sessionStorage.setItem("token",JSON.stringify(response.data.token));
      toast.success("Login successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
  };

  return (
    <div className="w-full h-screen relative bg-cyan-500 flex justify-center items-center">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#f7fcff', '#f7fcff']}
    particleCount={300}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={150}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
      <form className="w-full max-w-md  backdrop-blur-sm p-8 rounded-3xl absolute flex flex-col justify-center ">

        {/* Icon */}
        <div className="flex flex-col items-center mb-4">
           <div className="p-3 rounded-xl bg-gradient-to-br from-[#23b7d9] to-[#15d39e] text-white flex items-center justify-center">
        <Activity size={26} strokeWidth={2.5} />
      </div>

          <h1 className="text-2xl text-white font-bold mt-2">Create Your Account</h1>
          <p className="text-white text-sm mt-1">
            Start your journey to recovery today.
          </p>
        </div>

        {
            register ? <h2 className="text-2xl font-light text-white text-center mb-6">
              Register
            </h2> : <h2 className="text-2xl font-light text-white text-center mb-6">
              Login
            </h2>
          }
       

        {
              register && 
        <div className="mb-4">
          <Label htmlFor="name" value="Full Name" />
          <TextInput
          // onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          onChange={(e)=>setUserData({...userData,username:e.target.value})}
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        }
       
        <div className="mb-4">
          <Label htmlFor="email" value="Email address" />
          <TextInput
           onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            id="email"
            type="email"
            placeholder="Email address"
            required
          />
        </div>

       
        <div className="mb-6">
          <Label htmlFor="password" value="Password" />
         <TextInput
         onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          id="password"
          type="password"
          placeholder="Password"
          required
          className="white"
          />

        </div>

         {

              register ? <Button onClick={handleRegister}

               type="button"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white"

                size="lg"

              >

                Register

              </Button> : <Button onClick={handleLogin}

               type="button"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                size="lg"

              >

                Login

              </Button>

            }

            <div className="mt-5">
              <GoogleLogin
             onClick={()=>handleGoogleLogin(credentialResponse)}
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  handleGoogleLogin(credentialResponse)
                  // credentialResponce decode => JWT DECODE
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
            </div>

        {
                register ? <div className="text-center mt-5">
                  <p className="text-white text-sm">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-gray-900! hover:text-gray-600!  font-medium"
                    >
                      Login
                    </a>
                  </p>
                </div> : <div className="text-center mt-5">
                  <p className="text-white text-sm">
                    Don't have an account?{" "}
                    <a
                      href="/register"
                      className="text-gray-900! hover:text-gray-600!   font-medium"
                    >
                      Register
                    </a>
                  </p>
                </div>
              }
      </form>
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
    </div>
  );
}

export default Auth;