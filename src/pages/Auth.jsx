import React from "react";
import { Label, TextInput, Button } from "flowbite-react";
import Particles from '../reactbits/Particles';
import { Activity } from "lucide-react";



function Register() {
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

       
        <div className="mb-4">
          <Label htmlFor="name" value="Full Name" />
          <TextInput
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

       
        <div className="mb-4">
          <Label htmlFor="email" value="Email address" />
          <TextInput
            id="email"
            type="email"
            placeholder="Email address"
            required
          />
        </div>

       
        <div className="mb-6">
          <Label htmlFor="password" value="Password" />
         <TextInput
  id="password"
  type="password"
  placeholder="Password"
  required
  className="white"
/>

        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white"
        >
          Register Account
        </Button>

        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;