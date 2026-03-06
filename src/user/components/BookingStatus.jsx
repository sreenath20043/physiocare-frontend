import { Button } from "flowbite-react";
import { Calendar, Clock, MapPin, Phone, User, Download, Trash2, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Activity, useEffect, useState } from "react";
import { getAllBookingAPI, cancelBookingAPI } from "../../../services/allAPIs";
import { toast, ToastContainer } from "react-toastify";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


export default function BookingStatus() {


  const [bookings, setBookings] = useState([]);



  useEffect(() => {
    const fetchBookings = async () => {
 
       const token = sessionStorage.getItem("token");
       if (!token) {
         console.log("No token found");
         return;
       }
       
       const cleanedToken = token.replace(/"/g, "");
       const reqHeader = {
         Authorization : `Bearer ${cleanedToken}`
         }

      try {
        const response = await getAllBookingAPI(reqHeader);
        if (response.status === 200) {
          setBookings(response.data)
          console.log("Bookings fetched:", response.data);
        }
      } catch (error) {
        console.log('Error fetching bookings:', error);
      }
    };
    
    fetchBookings();
  }, []);


  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await cancelBookingAPI(bookingId)
      if (response.status === 200) {
        setBookings(bookings.filter(booking => booking._id !== bookingId))
        // alert('Booking cancelled successfully')
        toast.success("Booking cancelled successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log('Error cancelling booking:', error)
      // alert('Failed to cancel booking')
      toast.error("Failed to cancel booking...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }


  //pdf download
  
  // const handleDownload = async () => {

  //   //1 get an element
  //   const input = document.getElementById("result")
  //   console.log(input)
  //   // 2 convert as canvas

  //   const canvas = await html2canvas(input, { scale: 2 })
  //   console.log(canvas);  // it  returns promise => thats why here we used async await

  //   //3 conver canavas into imagURL
  //   const imgURL = canvas.toDataURL('image/png')
  //   console.log(imgURL)

  //   //4 genarate PDF

  //   const pdf = new jsPDF('l', 'mm', 'a2');
  //   const pdfWidth = pdf.internal.pageSize.getWidth()
  //   const pdfHeight = (canvas.height * pdfWidth) / canvas.width
  //   //image to pdf

  //   pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight)
  //   pdf.save('Booking.pdf')

  // }

  const handleDownload = (item) => {

  const pdf = new jsPDF("p", "mm", "a4");

  pdf.setFontSize(18);
  pdf.text("PhysioCare Booking Receipt", 20, 20);

  pdf.setFontSize(12);

  pdf.text(`Doctor: Dr. ${item.doctorId?.username}`, 20, 40);
  pdf.text(`Specialization: ${item.doctorId?.specialization}`, 20, 50);
  pdf.text(`Location: ${item.doctorId?.location}`, 20, 60);

  pdf.text(`Patient Name: ${item.username}`, 20, 75);
  pdf.text(`Phone: ${item.number}`, 20, 85);

  pdf.text(`Date: ${item.date}`, 20, 100);
  pdf.text(`Time: ${item.time}`, 20, 110);
  pdf.text(`Session: ${item.session}`, 20, 120);

  pdf.text(`Status: ${item.status}`, 20, 135);

  pdf.line(20, 145, 190, 145);

  pdf.text("Thank you for choosing PhysioCare!", 20, 160);

  pdf.save("Booking-Receipt.pdf");
};


  return (
    <div className="min-h-screen bg-[#f5f7fa] p-6 md:p-10">

      <header className="bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="flex justify-between items-center">
          {/* Logo */}
           <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-[#23b7d9] to-[#15d39e] text-white flex items-center justify-center">
                  <Activity size={22} className="sm:w-[26px] sm:h-[26px]" strokeWidth={2.5} />
                </div>
                <h1 className="text-lg sm:text-2xl font-semibold text-[#2b3b56]">
                  PhysioCare
                </h1>
              </div>
            </Link>
          </div>
        </nav>
      </header>

      <h2 className="text-xl font-semibold mb-6 mt-6 text-gray-800">
        {bookings.length} Booking(s) Found
      </h2>

      {bookings.length === 0 && (
        <div className="bg-white shadow rounded-xl p-12 flex flex-col items-center text-center border border-gray-200">
          <Calendar className="h-16 w-16 text-gray-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Bookings Yet</h3>
          <p className="text-gray-500 mb-6">You haven't booked any appointments yet. Start by finding a therapist.</p>
          <Link to={'/alldoctors'}><Button gradientDuoTone="greenToBlue">Browse Therapists</Button></Link>
        </div>
      )}

      <div className="space-y-6">
        {bookings.map((item, index) => (
          <div id="result"
            key={index}
            className="bg-white shadow border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >

            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
               
                <CheckCircle className="h-5 w-5 text-blue-500" />
                 Dr. {item.doctorId?.username}
              </h3>
              <p className="text-blue-600 font-medium"><p>{item.doctorId?.specialization}</p></p>

              <div className="flex flex-col md:flex-row md:items-center gap-6 mt-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  {item.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  {item.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  {item.doctorId?.location}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-500" />
                  {item.number}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-500" />
                  {item.username}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Session: {item.session}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-500" />
                  Description: {item.description}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                {item.status}
              </span>
 {/* onClick={handleDownload} */}
              <div className="flex items-center gap-3">
                <Button onClick={() => handleDownload(item)} color="light" className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download
                </Button>

                <Button color="failure" className="flex items-center gap-2 hover:bg-amber-600" onClick={() => handleCancelBooking(item._id)}>
                  <Trash2 className="h-4 w-4" /> Cancel
                </Button>
              </div>
            </div>
          </div>
        ))}
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


