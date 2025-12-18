import React, { useState } from 'react'
import AdminHeader from './Admin-Header'
import { Tabs } from "flowbite-react";
import {
  HiOutlineUserAdd,
  HiOutlineUsers,
  HiOutlineCog,
} from "react-icons/hi";
import { Modal, Button, TextInput, Label } from "flowbite-react";

import AdminFooter from '../components/Admin-Footer';
import { X } from 'lucide-react';

function AdminPage() {

    const [openModal, setOpenModal] = useState(false);

  return (
    <div >
      <AdminHeader />

      <div className='bg-gray-100! mb-[-50px]'>
        <div className="bg-gray-100 p-2 rounded-xl w-fit mt-3 ml-2">
          <Tabs
            aria-label="Dashboard tabs"
            variant="pills"
          >
            {/* pending */}
            <Tabs.Item
              active
              title="Pending (2)"
              icon={HiOutlineUserAdd}
            >
              <div className="p-4 bg-white rounded-lg shadow  w-372">
                {/* Pending Doctor Approvals */}
                <div className="border rounded-xl p-6">
                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Pending Doctor Approvals
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Review and approve doctor registrations
                  </p>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b text-left text-gray-600">
                          <th className="py-3 px-2 font-medium">Name</th>
                          <th className="py-3 px-2 font-medium">Email</th>
                          <th className="py-3 px-2 font-medium">Specialization</th>
                          <th className="py-3 px-2 font-medium">Experience</th>
                          <th className="py-3 px-2 font-medium">Registered</th>
                          <th className="py-3 px-2 font-medium text-center">Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* ROW TEMPLATE – backend data will come here */}
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-2 font-medium text-gray-900">
                            Doctor Name
                          </td>
                          <td className="py-4 px-2 text-gray-700">
                            doctor@email.com
                          </td>
                          <td className="py-4 px-2">
                            Specialization
                          </td>
                          <td className="py-4 px-2">
                            Experience
                          </td>
                          <td className="py-4 px-2">
                            Date
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex justify-center gap-2">
                              <button className="bg-green-500 text-white rounded-lg px-4 py-2">
                                ✓
                              </button>
                              <button className="bg-red-500 text-white rounded-lg px-4 py-2">
                                ✕
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        {/* ROW TEMPLATE – backend data will come here */}
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-2 font-medium text-gray-900">
                            Doctor Name
                          </td>
                          <td className="py-4 px-2 text-gray-700">
                            doctor@email.com
                          </td>
                          <td className="py-4 px-2">
                            Specialization
                          </td>
                          <td className="py-4 px-2">
                            Experience
                          </td>
                          <td className="py-4 px-2">
                            Date
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex justify-center gap-2">
                              <button className="bg-green-500 text-white rounded-lg px-4 py-2">
                                ✓
                              </button>
                              <button className="bg-red-500 text-white rounded-lg px-4 py-2">
                                ✕
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </Tabs.Item>

            {/* doctors */}
            <Tabs.Item
              title="All Doctors"
              icon={HiOutlineUsers}
            >
              <div className="p-4 bg-white rounded-lg shadow rounded-xl border border-gray-200!  w-372">
                {/* Title */}
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    All Doctors
                  </h2>
                  <p className="text-gray-500">
                    View all registered doctors
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
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
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-2 font-medium text-gray-900">
                          Doctor Name
                        </td>
                        <td className="py-4 px-2 text-gray-700">
                          doctor@email.com
                        </td>
                        <td className="py-4 px-2">
                          Specialization
                        </td>
                        <td className="py-4 px-2">
                          8 years
                        </td>

                        {/* STATUS */}
                        <td className="py-4 px-2">
                          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                            Pending
                          </span>
                        </td>

                        <td className="py-4 px-2">
                          2025-01-15
                        </td>


                      </tr>
                    </tbody>
                  </table>
                </div>


              </div>
            </Tabs.Item>

            {/* users */}
            <Tabs.Item
              title="All Patients"
              icon={HiOutlineUsers}
            >
              <div className="p-4 bg-white rounded-lg shadow  w-372">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b text-left text-gray-600">
                        <th className="py-3 px-2 font-medium">Name</th>
                        <th className="py-3 px-2 font-medium">Email</th>
                        <th className="py-3 px-2 font-medium">Phone</th>
                        <th className="py-3 px-2 font-medium">Registered</th>
                        <th className="py-3 px-2 font-medium text-center">
                          Total Bookings
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* ROW TEMPLATE – backend data will come here */}
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-2 font-medium text-gray-900">
                          Patient Name
                        </td>

                        <td className="py-4 px-2 text-gray-700">
                          patient@email.com
                        </td>

                        <td className="py-4 px-2 text-gray-700">
                          +91 4579895603
                        </td>

                        <td className="py-4 px-2">
                          2025-01-12
                        </td>

                        <td className="py-4 px-2 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-700 text-sm font-medium">
                            3
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </Tabs.Item>

            {/* setting */}
            <Tabs.Item
              title="Settings"
              icon={HiOutlineCog}
            >
              {/* <div className="p-4 bg-white rounded-lg shadow"> */}
                <div className="p-6 bg-white rounded-lg shadow ml-90 w-200">
  {/* Header */}
  <div className="mb-6 ml-8">
    <h2 className="text-2xl font-semibold text-gray-900">
      Admin Settings
    </h2>
    <p className="text-gray-500">
      Manage your admin profile
    </p>
  </div>

  {/* Profile Section */}
  <div className="flex items-center gap-6 mb-8 ml-8">
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100">
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V7l7-4z"
        />
      </svg>
    </div>

    <div className=''>
      <h3 className="text-xl font-semibold text-gray-900">
        Admin User
      </h3>
      <p className="text-gray-500">
        Super Admin
      </p>
    </div>
  </div>

  {/* Details */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ml-8">
    <div>
      <p className="text-gray-500 mb-1">Email</p>
      <p className="font-medium text-gray-900">
        admin@physiocare.com
      </p>
    </div>

    <div>
      <p className="text-gray-500 mb-1">Phone</p>
      <p className="font-medium text-gray-900">
        +91 8979754679
      </p>
    </div>
  </div>

  
  <button onClick={() => setOpenModal(true)} className="ml-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
    Edit Profile
  </button>

      <Modal
  show={openModal}
  size="2xl"
  popup
  onClose={() => setOpenModal(false)}
>
    <div className="relative p-6 bg-white rounded-2xl">

      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X size={20} />
      </button>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        Edit Admin Profile
      </h3>

      <div className="mb-5">
  <Label htmlFor="name" value="Name" className="mb-2 block" />
  <TextInput
    id="name"
    type="text"
    placeholder="Admin User"
    className="
      w-full
      rounded-xl
      border border-gray-200
      bg-white
      focus:border-blue-500
      focus:ring-2
      focus:ring-blue-100
    "
  />
</div>

<div className="mb-5">
  <Label htmlFor="email" value="Email" className="mb-2 block" />
  <TextInput
    id="email"
    type="email"
    placeholder="admin@physiocare.com"
    className="
      w-full
      rounded-xl
      border border-gray-200
      bg-white
      focus:border-blue-500
      focus:ring-2
      focus:ring-blue-100
    "
  />
</div>

<div className="mb-5">
  <Label htmlFor="password" value="Password" className="mb-2 block" />
  <TextInput
    id="password"
    type="password"
    placeholder="••••••••"
    className="
      w-full
      rounded-xl
      border border-gray-200
      bg-white
      focus:border-blue-500
      focus:ring-2
      focus:ring-blue-100
    "
  />
</div>


     

      <div className="flex justify-end gap-3">
        <Button
  onClick={() => setOpenModal(false)}
  className="
    bg-white!
    text-black
    border border-gray-300
    hover:bg-blue-600!
    hover:text-white
    transition-colors
  "
>
  Cancel
</Button>

        <Button color="blue">
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
    </div>
  )
}

export default AdminPage