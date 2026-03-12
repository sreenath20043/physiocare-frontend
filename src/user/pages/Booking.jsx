import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextInput, Label, Radio, Textarea, Select, Button, Card } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import { doctorBookingAPI, getAllBookingAPI, getDoctorByIdAPI } from "../../../services/allAPIs";
import { loadStripe } from "@stripe/stripe-js";

function Booking() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [token, setToken] = useState('')
  const [bookingData, setBookingData] = useState({
    username: "",
    email: "",
    number: "",
    session: "",
    date: "",
    time: "",
    description: ""
    // status:""
  });

  const navigate = useNavigate()


const stripePromise = loadStripe("pk_test_51T3CseFpVLyfwF64okYguWrweshlE3JR5qa9kZMCAVkhdQ4930i4di0v1bmIkWwi9O3Yw3vnEhZIUFOXc8Ffx0Ul00lx1m3KeQ");

// const handleStripePayment = async () => {

//   if (
//     !bookingData.username ||
//     !bookingData.email ||
//     !bookingData.number ||
//     !bookingData.session ||
//     !bookingData.date ||
//     !bookingData.time ||
//     !bookingData.description
//   ) {
//     toast.warning("Please fill all fields");
//     return;
//   }

//   // Save temporarily
//   sessionStorage.setItem(
//     "pendingBooking",
//     JSON.stringify({
//       doctorId: id,
//       ...bookingData
//     })
//   );

//   // Create stripe session
//   const res = await fetch(
//     "http://localhost:3000/api/stripe/create-checkout-session",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         doctorId: id,
//         fees: doctor?.fees,
//         bookingData
//       }),
//     }
//   );

//   const data = await res.json();

//   window.location.href = data.url;   
// };

const handleStripePayment = async () => {

  if (
    !bookingData.username ||
    !bookingData.email ||
    !bookingData.number ||
    !bookingData.session ||
    !bookingData.date ||
    !bookingData.time ||
    !bookingData.description
  ) {
    toast.warning("Fill all fields");
    return;
  }

  try {

    sessionStorage.setItem(
      "pendingBooking",
      JSON.stringify({
        doctorId: id,
        ...bookingData
      })
    );

    const res = await fetch("http://localhost:3000/api/stripe/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        doctorId: id,
        fees: doctor?.fees,
      }),
    });

    const data = await res.json();

    window.location.href = data.url;

  } catch (err) {
    toast.error("Payment initialization failed");
  }
};

// const handleStripePayment = async () => {
//   if (
//     !bookingData.username ||
//     !bookingData.email ||
//     !bookingData.number ||
//     !bookingData.session ||
//     !bookingData.date ||
//     !bookingData.time ||
//     !bookingData.description
//   ) {
//     toast.warning("Fill all fields");
//     return;
//   }else{

//      const updatedToken = token ? token.replace(/"/g, "") : "";
//       const reqHeader = {
//         Authorization: `Bearer ${updatedToken}`
//       };
//       console.log(reqHeader);

//   try {

//     sessionStorage.setItem(
//   "pendingBooking",
//   JSON.stringify({
//     doctorId: id,   
//     ...bookingData
//   })
// );

//    const res = await fetch("http://localhost:3000/api/stripe/create-checkout-session", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     doctorId: id,
//     fees: doctor?.fees,
//     bookingData,
//   }),
// });

// const data = await res.json();
// window.location.href = data.url;

  
//         const bookingDataToSend = {
//           username: bookingData.username,
//           email: bookingData.email,
//           number: bookingData.number,
//           session: bookingData.session,
//           date: bookingData.date,
//           time: bookingData.time,
//           description: bookingData.description
//         };

//         // Store userDetails in sessionStorage for BookingStatus filtering
//         sessionStorage.setItem("userDetails", JSON.stringify({
//           username: bookingData.username,
//           email: bookingData.email,
//           number: bookingData.number
//         }));

//         const response = await getUserBookingsAPI(bookingDataToSend, reqHeader);
//         console.log(response);
//         if (response.status == 201) {
         

//           // set empty state values after registration done
//           setBookingData({ username: "", email: "", number: "", session: "", date: "", time: "", description: "" });

//           setTimeout(() => {
//             navigate("/alldoctors");
//           }, 3000);
//         } else {
//           toast.error("Already Booking...", {
//             position: "bottom-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//           });

//           console.log(response.response.data.message);
//         }
      

//   } catch (err) {
//     console.error(err);
//     toast.error("Payment failed");
//   }
//     }
// };

  useEffect(() => setToken(sessionStorage.getItem("token")), []);

// useEffect(() => {
//   const fetchBookings = async () => {
//     const token = sessionStorage.getItem("token");
//     const result = await getUserBookingsAPI(token);

//     if (result.status === 200) {
//       setBookingData(result.data);
//     }
//   };

//   fetchBookings();
// }, []);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await getDoctorByIdAPI(id);
        if (response.status === 200) {
          setDoctor(response.data);
        }
      } catch (error) {
        console.log('Error fetching doctor:', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchDoctor();
    }
  }, [id]);




  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Book Appointment</h1>
        <p className="text-gray-600">Schedule your session</p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          <Card className="col-span-2 p-6 bg-white!">
            <form >
              <h2 className="text-xl font-semibold mb-4">Patient Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label value="Full Name *" />
                  <TextInput
                    color='white'
                    placeholder="Name"
                    name="username"
                    onChange={(e) => setBookingData({ ...bookingData, username: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label value="Email *" />
                  <TextInput
                    color='white'
                    placeholder="Email"
                    type="email"
                    name="email"
                    // value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label value="Phone Number *" />
                <TextInput
                  color='white'
                  placeholder="Phone Number"
                  name="number"
                  // value={bookingData.number}
                  onChange={(e) => setBookingData({ ...bookingData, number: e.target.value })}
                  required
                />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Session Type</h3>
                <div className="flex flex-col gap-3">

                  <label className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer bg-white shadow-sm">
                    <Radio
                      color='white'
                      name="sessionType"
                      value="In-Person"
                      // checked={bookingData.session === 'In-Person'}
                      onChange={(e) => setBookingData({ ...bookingData, session: e.target.value })}
                    />
                    <span>In-Person</span>
                  </label>

                  <label className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer bg-white shadow-sm">
                    <Radio
                      color='white'
                      name="sessionType"
                      value="Online"
                      // checked={bookingData.session === 'Online'}
                      onChange={(e) => setBookingData({ ...bookingData, session: e.target.value })}
                    />
                    <span>Online</span>
                  </label>

                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <Label value="Preferred Date" />
                  <TextInput
                    color='white'
                    type="date"
                    name="date"
                    // value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  />
                </div>

                <div>
                  <Label value="Preferred Time *" />
                  <Select
                    color='white'
                    name="time"
                    // value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    required
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <Label value="Description" />
                <Textarea
                  color='white'
                  rows={4}
                  placeholder="Describe your condition..."
                  name="description"
                  // value={bookingData.description}
                  onChange={(e) => setBookingData({ ...bookingData, description: e.target.value })}
                />
              </div>

              <Button onClick={handleStripePayment} type="button" className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 rounded-full">
                Confirm Appointment
              </Button>
            </form>
          </Card>

          <Card className="p-6 h-fit bg-white!">


            <h2 className="text-lg font-semibold mb-3">Appointment Summary</h2>

            <div className="flex items-center gap-4">
              <img
                src={doctor?.profileImage ? `http://localhost:3000/uploads/${doctor.profileImage}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-vJs-4Nsrp82zD1yTdth39lp-SB9POFzXw&s"}
                alt="Doctor"
                className="rounded-full w-14 h-14 object-cover"
              />
              <div>
                <h3 className="font-medium">Dr. {doctor?.username}</h3>
                <p className="text-sm text-blue-600"> {doctor?.specialization}</p>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <div className="flex justify-between py-1">
                <span>Location</span>
                <span className="font-medium">{doctor?.location}</span>
                <span>Section</span>
              </div>

              <div className="flex justify-between py-1">
                <span>Consultation Fee</span>
                <span className="font-medium">₹{doctor?.fees}</span>
                <span>45 Minutes</span>
              </div>
            </div>

            <div className="p-4 bg-cyan-50 rounded-lg mt-4">
              <p className="text-sm text-gray-600">Total Amount</p>
              <h2 className="text-2xl text-cyan-600 font-bold">₹{doctor?.fees}</h2>

            </div>

            {/* <p className="text-xs mt-4 text-gray-500">
              * You will receive a confirmation email once your appointment is confirmed.
            </p> */}
          </Card>
        </div>
      </div>
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

export default Booking;