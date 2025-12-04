import { Button } from "flowbite-react";
import { Calendar, Clock, MapPin, Phone, User, Download, Trash2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookingStatus({ bookings = [] }) {
  return (
    <div className="min-h-screen bg-[#f5f7fa] p-6 md:p-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        {bookings.length} Booking(s) Found
      </h2>

      {/* If no bookings */}
      {bookings.length === 0 && (
        <div className="bg-white shadow rounded-xl p-12 flex flex-col items-center text-center border border-gray-200">
          <Calendar className="h-16 w-16 text-gray-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Bookings Yet</h3>
          <p className="text-gray-500 mb-6">You haven't booked any appointments yet. Start by finding a therapist.</p>
          <Link to={'/alldoctors'}><Button gradientDuoTone="greenToBlue">Browse Therapists</Button></Link>
        </div>
      )}

      {/* Booking List */}
      <div className="space-y-6">
        {bookings.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            {/* Left Section */}
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                {item.doctor}
                <CheckCircle className="h-5 w-5 text-blue-500" />
              </h3>
              <p className="text-blue-600 font-medium">{item.specialization}</p>

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
                  {item.location}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-500" />
                  {item.phone}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-500" />
                  {item.patient}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-end gap-3">
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                {item.status}
              </span>

              <div className="flex items-center gap-3">
                <Button color="light" className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download PDF
                </Button>

                <Button color="failure" className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" /> Cancel
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


