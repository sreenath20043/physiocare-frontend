import React, { useEffect, useState } from 'react'
import AdminHeader from './Admin-Header'
import { Tabs } from "flowbite-react";
import { getDoctorByIdAPI, getAllDoctorsAPI, getAllBookingAPI, getAllUsersAPI, updateAdminAPI } from '../../../services/allAPIs'
import {
  HiOutlineUserAdd,
  HiOutlineUsers,
  HiOutlineCog,
} from "react-icons/hi";
import { Modal, Button, TextInput, Label } from "flowbite-react";
import AdminFooter from '../components/Admin-Footer';
import { X } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function AdminPage() {

  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams()
  const [doctors, setDoctors] = useState([]);
  const [allBooking, setAllBookings] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [adminDetails, setadminDetails] = useState({
    username: "",
    email: "",
    password: "",
    role: ""
  });
  const [token, setToken] = useState('')

  //all doctor
  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const response = await getAllDoctorsAPI()
        if (response.status === 200) {
          setDoctors(response.data)
        }
      } catch (error) {
        console.log('Error fetching doctors:', error)
      }
    }
    fetchAllDoctors()
  }, [id])

  //all booking
  useEffect(() => {
    const fetchAllBooking = async () => {
      try {
        const response = await getAllBookingAPI();
        if (response.status === 200) {
          setAllBookings(response.data);
        }
      } catch (error) {
        console.log('Error fetching bookings:', error);
      }
    };
    fetchAllBooking();
  }, [id]);

  //all user
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await getAllUsersAPI();
        if (response.status === 200) {
          setAllUsers(response.data);
        }
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };
    fetchAllUsers();
  }, [id]);


// update
  const handleUpdate = async () => {
    const updatedToken = token ? token.replace(/"/g, "") : "";
    const reqHeader = {
      Authorization: `Bearer ${updatedToken}`,
      'Content-Type': 'application/json'
    };
    try {
      const response = await updateAdminAPI(adminDetails, reqHeader);
      if (response.status === 200) {
        toast.success("Update successfully");
      } else {
        toast.error("Error in update...");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => setToken(sessionStorage.getItem("token")), [token]);

  return (
    <div>
      <AdminHeader />

      <div className='bg-gray-100 mb-[-50px]'>
        <div className="bg-gray-100 p-3 rounded-xl w-full mt-3 px-2 sm:px-6">

          <Tabs aria-label="Dashboard tabs" variant="pills">

            {/* ---------------- ALL BOOKING ---------------- */}
            <Tabs.Item active title="All Booking" icon={HiOutlineUserAdd}>
              <div className="p-4 bg-white rounded-lg shadow w-full">
                <div className="border rounded-xl p-4 sm:p-6">

                  <h2 className="text-2xl font-semibold text-gray-900">
                    All boking
                  </h2>
                  <p className="text-gray-500 mb-6">
                    View all boking
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse min-w-[700px]">
                      <thead>
                        <tr className="border-b text-left text-gray-600">
                          <th className="py-3 px-2 font-medium">Name</th>
                          <th className="py-3 px-2 font-medium">Email</th>
                          <th className="py-3 px-2 font-medium">number</th>
                          <th className="py-3 px-2 font-medium">Registered</th>
                        </tr>
                      </thead>

                      <tbody>
                        {Array.isArray(allBooking) && allBooking.length > 0 ? (
                          allBooking.map((booking, idx) => (
                            <tr key={idx} className="border-b hover:bg-gray-50">
                              <td className="py-4 px-2 font-medium text-gray-900">{booking.username}</td>
                              <td className="py-4 px-2 text-gray-700">{booking.email}</td>
                              <td className="py-4 px-2">{booking.session || '-'}</td>
                              <td className="py-4 px-2">{booking.date || '-'}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="py-4 px-2 text-center text-gray-500">No bookings found.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </Tabs.Item>

            {/* ---------------- ALL DOCTORS ---------------- */}
            <Tabs.Item title="All Doctors" icon={HiOutlineUsers}>
              <div className="p-4 sm:p-6 bg-white rounded-lg shadow border w-full">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    All Doctors
                  </h2>
                  <p className="text-gray-500">
                    View all registered doctors
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[900px]">
                    <thead>
                      <tr className="border-b text-left text-gray-600">
                        <th className="py-3 px-2 font-medium">Name</th>
                        <th className="py-3 px-2 font-medium">Email</th>
                        <th className="py-3 px-2 font-medium">Specialization</th>
                        <th className="py-3 px-2 font-medium">Experience</th>
                        <th className="py-3 px-2 font-medium">Status</th>
                        <th className="py-3 px-2 font-medium">Registered</th>
                      </tr>
                    </thead>

                    <tbody>
                      {doctors.map((doctor, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-2 font-medium text-gray-900">{doctor.username}</td>
                          <td className="py-4 px-2 text-gray-700">{doctor.email}</td>
                          <td className="py-4 px-2">{doctor.specialization}</td>
                          <td className="py-4 px-2">{doctor.experience}</td>
                          <td className="py-4 px-2">
                            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                              Pending
                            </span>
                          </td>
                          <td className="py-4 px-2">{doctor.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Tabs.Item>

            {/* ---------------- ALL PATIENTS ---------------- */}
            <Tabs.Item title="All Patients" icon={HiOutlineUsers}>
              <div className="p-4 sm:p-6 bg-white border rounded-xl shadow w-full">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b text-left text-gray-600">
                        <th className="py-3 px-2 font-medium">Name</th>
                        <th className="py-3 px-2 font-medium">Email</th>
                        <th className="py-3 px-2 font-medium">Role</th>
                        {/* <th className="py-3 px-2 font-medium text-center">Total Bookings</th> */}
                      </tr>
                    </thead>

                    <tbody>
                      {Array.isArray(allUsers) && allUsers.length > 0 ? (
                        allUsers.map((user, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-2 font-medium text-gray-900">{user.username}</td>
                            <td className="py-4 px-2 text-gray-700">{user.email}</td>
                            <td className="py-4 px-2 text-gray-700">{user.role || '-'}</td>
                            {/* <td className="py-4 px-2 text-center">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-700 text-sm font-medium">-</span>
                            </td> */}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="py-4 px-2 text-center text-gray-500">No users found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </Tabs.Item>

            {/* ---------------- SETTINGS ---------------- */}
            <Tabs.Item title="Settings" icon={HiOutlineCog}>
              <div className="p-4 sm:p-6 bg-white rounded-lg shadow w-full max-w-4xl mx-auto">

                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Admin Settings
                  </h2>
                  <p className="text-gray-500">
                    Manage your admin profile
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V7l7-4z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Admin User</h3>
                    <p className="text-gray-500">Super Admin</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-gray-900">admin@physiocare.com</p>
                  </div>

                  <div>
                    <p className="text-gray-500 mb-1">Phone</p>
                    <p className="font-medium text-gray-900">+91 8979754679</p>
                  </div>
                </div>

                <button
                  onClick={() => setOpenModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-full sm:w-auto"
                >
                  Edit Profile
                </button>

                <Modal show={openModal} size="2xl" popup onClose={() => setOpenModal(false)}>
                  <div className="relative p-6 bg-white rounded-2xl">

                    <button
                      onClick={() => setOpenModal(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>

                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                      Edit Admin Profile
                    </h3>

                    <div className="mb-5">
                      <Label htmlFor="name" value="Name" className="mb-2 block" />
                      <TextInput
                        id="name"
                        type="text"
                        onChange={(e) => setadminDetails({ ...adminDetails, username: e.target.value })}
                        placeholder="Admin User"
                      />
                    </div>

                    <div className="mb-5">
                      <Label htmlFor="email" value="Email" className="mb-2 block" />
                      <TextInput
                        id="email"
                        type="email"
                        onChange={(e) => setadminDetails({ ...adminDetails, email: e.target.value })}
                        placeholder="admin@physiocare.com"
                      />
                    </div>

                    <div className="mb-5">
                      <Label htmlFor="password" value="Password" className="mb-2 block" />
                      <TextInput
                        id="password"
                        type="password"
                        onChange={(e) => setadminDetails({ ...adminDetails, password: e.target.value })}
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="mb-5">
                      <Label htmlFor="role" value="Role" className="mb-2 block" />
                      <TextInput
                        id="role"
                        type="text"
                        onChange={(e) => setadminDetails({ ...adminDetails, role: e.target.value })}
                        placeholder="physiocareAdmin"
                      />
                    </div>

                    <div className="flex justify-end gap-3">
                      <Button onClick={() => setOpenModal(false)}>Cancel</Button>
                      <Button onClick={handleUpdate} color="blue">
                        Save Changes
                      </Button>
                    </div>

                  </div>
                </Modal>

              </div>
            </Tabs.Item>

          </Tabs>
        </div>
      </div>

      <AdminFooter />

      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </div>
  )
}

export default AdminPage