import React from 'react'
// import { Button } from "flowbite-react";
// import {
//   HiOutlineHome,
//   HiOutlineArrowLeft,
// } from "react-icons/hi";

import { Button, Card } from "flowbite-react";
import {
  HiOutlineHome,
  HiOutlineArrowLeft,
  HiOutlineHeart,
} from "react-icons/hi";
import { Link } from 'react-router-dom';

function Pagenf() {
  return (
    <div>
     
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-black text-white px-4 overflow-hidden">
      
      {/* Floating stars */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative z-10 max-w-xl text-center space-y-6">
        
        {/* Astronaut / Planet */}
        <div className="text-[8rem] leading-none animate-bounce">
          🧑‍🚀
        </div>

        {/* Text */}
        <h1 className="text-7xl font-extrabold tracking-widest">404</h1>
        <h2 className="text-2xl font-semibold">
          Oops… You’re Lost in Space
        </h2>

        <p className="text-gray-300 max-w-md mx-auto">
          The page you’re trying to reach drifted off into another galaxy.
          Don’t worry — we’ll get you back safely.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4 pt-4">
          <Link to={"/"}>
            <Button
              color="purple"
              className="flex items-center gap-2 shadow-lg"
            >
              <HiOutlineHome className="h-5 w-5" />
              Take Me Home
            </Button>
          </Link>

          {/* <Button
            color="light"
            className="flex items-center gap-2"
          >
            <HiOutlineArrowLeft className="h-5 w-5" />
            Go Back
          </Button> */}
        </div>
      </div>
    </div>

     </div>
    // <>
    //  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 px-4">
    //   <Card className="max-w-lg w-full text-center shadow-xl">
    //     <div className="flex flex-col items-center space-y-5">

    //       {/* Icon */}
    //       <div className="bg-emerald-100 text-emerald-600 rounded-full p-5">
    //         <HiOutlineHeart className="h-12 w-12" />
    //       </div>

    //       {/* Headings */}
    //       <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
    //       <h2 className="text-2xl font-semibold text-gray-700">
    //         Page Under Recovery
    //       </h2>

    //       {/* Message */}
    //       <p className="text-gray-500 max-w-md">
    //         Oops! The page you’re looking for seems to be taking a short rest.
    //         Our PhysioCare team is always here to help you get back on track.
    //       </p>

    //       {/* Actions */}
    //       <div className="flex flex-wrap justify-center gap-3 pt-4">
    //         <Button
    //           color="success"
    //           className="flex items-center gap-2"
    //         >
    //           <HiOutlineHome className="h-5 w-5" />
    //           Back to Home
    //         </Button>

    //         <Button
    //           color="light"
    //           className="flex items-center gap-2"
    //         >
    //           <HiOutlineArrowLeft className="h-5 w-5" />
    //           Go Back
    //         </Button>
    //       </div>
    //     </div>
    //   </Card>
    // </div>
    // </>
  )
}

export default Pagenf