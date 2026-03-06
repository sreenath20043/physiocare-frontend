

import { useEffect, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { doctorBookingAPI } from "../../../services/allAPIs";
import { toast, ToastContainer } from "react-toastify";
import { Button, Card } from "flowbite-react";
import { CheckCircle } from "lucide-react";

function PaymentSuccess() {

  const [params] = useSearchParams();
   const sessionId = params.get("session_id");
   const transactionId = `#TXN${Date.now().toString().slice(-8)}`;
   const today = new Date().toLocaleDateString();
   const bookingCalled = useRef(false);



  console.log("Booking API calling...");

useEffect(() => {

  if (bookingCalled.current) return;
  bookingCalled.current = true;

  const saveBooking = async () => {
    const token = sessionStorage.getItem("token");
    const pendingBooking = JSON.parse(sessionStorage.getItem("pendingBooking"));

    const cleanedToken = token ? token.replace(/"/g, '') : '';

    if (!pendingBooking || !cleanedToken) return;

    const reqHeader = {
      Authorization: `Bearer ${cleanedToken}`,
      "Content-Type": "application/json"
    };

    try {
      const response = await doctorBookingAPI(pendingBooking, reqHeader);

      if (response.status === 201) {
        toast.success("Booking Successful ✅");
        sessionStorage.removeItem("pendingBooking"); 
      }

    } catch (err) {

      if (err.response?.status === 400) {
        console.log("Already booked - ignored");
      } else {
        toast.error("Booking Failed");
      }

    }
  };

  saveBooking();

}, []);


  // useEffect(() => {
  //   const saveBooking = async () => {

  //     const token = sessionStorage.getItem("token");
  //     const pendingBooking = JSON.parse(sessionStorage.getItem("pendingBooking"));

  //     console.log("Raw token:", token);
  //     console.log("Pending booking:", pendingBooking);

  //     // Clean token by removing quotes if present
  //     const cleanedToken = token ? token.replace(/"/g, '') : '';
  //     console.log("Cleaned token:", cleanedToken);

  //     if (!pendingBooking) {
  //       toast.error("No booking data found");
  //       return;
  //     }

  //     if (!cleanedToken) {
  //       toast.error("No authentication token found");
  //       return;
  //     }

  //     const reqHeader = {
  //       Authorization: `Bearer ${cleanedToken}`,
  //       "Content-Type": "application/json"
  //     };

  //     try {

  //       const response = await doctorBookingAPI(pendingBooking, reqHeader);
  //       console.log("API Response:", response);

  //       if (response.status === 201) {

  //         toast.success("Booking Successful ✅");

          

  //       } else {
  //         toast.error("Already Booking ");
  //       }

  //     } catch (err) {

  //       console.log("Full error:", err);
  //       console.log("Error response:", err.response);
  //       console.log("Error status:", err.response?.status);
  //       console.log("Error data:", err.response?.data);

  //       if (err.response?.status === 400) {
  //         toast.error("Already Booking ");
  //       } else if (err.response?.status === 401) {
  //         toast.error("Authentication failed - Please login again");
  //       } else if (err.response?.status === 500) {
  //         toast.error("Server error - Please try again later");
  //       } else {
  //         toast.error("Booking Failed ");
  //       }
  //     }
  //   };

  //   saveBooking();
  // }, []);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md text-center bg-white!">

        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-14 w-14 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Payment Successful!
        </h1>

        <p className="text-lg text-gray-500">
          Thank you for your payment. Your booking has been confirmed successfully.
        </p>

        

        <div className="mt-4 rounded-lg bg-gray-100 p-4 text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Transaction ID</span>
            <span className="font-medium text-gray-900 break-all">
              {transactionId}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Status</span>
            <span className="font-medium text-green-600">
              Completed
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Date</span>
            <span className="font-medium text-gray-900">
              {today}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/bookingstatus" className="w-full sm:w-auto">
            <Button color="success" className="w-full">
              View My Bookings
            </Button>
          </Link>

          <Link to="/alldoctors" className="w-full sm:w-auto">
            <Button color="gray" outline className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>

      </Card>
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

export default PaymentSuccess;