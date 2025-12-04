import React from "react";
import { TextInput, Label, Radio, Textarea, Select, Button, Card } from "flowbite-react";

function Booking() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Book Appointment</h1>
        <p className="text-gray-600">Schedule your session</p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          <Card className="col-span-2 p-6 bg-white!">
            <h2 className="text-xl font-semibold mb-4">Patient Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label value="Full Name *" />
                <TextInput color='white' placeholder="Nmae" />
              </div>

              <div>
                <Label value="Email *" />
                <TextInput color='white' placeholder="Gmail" />
              </div>
            </div>

            <div className="mt-4">
              <Label value="Phone Number *" />
              <TextInput color='white' placeholder="Number" />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Session Type</h3>
              <div className="flex flex-col gap-3">

                <label className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer bg-white shadow-sm">
                  <Radio color='white' name="session" />
                  <span>In-Person</span>
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer bg-white shadow-sm">
                  <Radio color='white' name="session" />
                  <span>Online</span>
                </label>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <Label value="Preferred Date *" />
                <TextInput color='white' type="date" />
              </div>

              <div>
                <Label value="Preferred Time *" />
                <Select color='white'>
                  <option>Select time</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <Label value="Reason for Visit *" />
              <Textarea color='white' rows={4} placeholder="Describe your condition..." />
            </div>

            <Button className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 rounded-full">
              Confirm Appointment
            </Button>
          </Card>

          <Card className="p-6 h-fit bg-white!">
            <h2 className="text-lg font-semibold mb-3">Appointment Summary</h2>

            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Doctor"
                className="rounded-full w-14 h-14 object-cover"
              />
              <div>
                <h3 className="font-medium">Dr. Sarah Chen</h3>
                <p className="text-sm text-blue-600">Sports Injury Rehabilitation</p>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <div className="flex justify-between py-1">
                <span>Location</span>
                <span className="font-medium">Downtown Clinic</span>
                <span>Section</span>
              </div>

              <div className="flex justify-between py-1">
                <span>Consultation Fee</span>
                <span className="font-medium">₹1000</span>
                <span>45 Miniutes</span>
              </div>
            </div>

            <div className="p-4 bg-cyan-50 rounded-lg mt-4">
              <p className="text-sm text-gray-600">Total Amount</p>
              <h2 className="text-2xl text-cyan-600 font-bold">₹950</h2>
              
            </div>

            <p className="text-xs mt-4 text-gray-500">
              * You will receive a confirmation email once your appointment is confirmed.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Booking;