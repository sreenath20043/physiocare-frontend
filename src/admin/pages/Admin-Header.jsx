import React from 'react'
import { Card, Button } from "flowbite-react";
import {
HiOutlineShieldCheck,
HiOutlineLogout,
HiOutlineUserAdd,
HiOutlineUserGroup,
HiOutlineUsers,
} from "react-icons/hi";
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
function AdminHeader() {
  const stats = [
{
title: "Pending Approvals",
value: 2,
icon: HiOutlineUserAdd,
bg: "bg-yellow-100",
color: "text-yellow-600",
},
{
title: "Approved Doctors",
value: 2,
icon: HiOutlineUserGroup,
bg: "bg-green-100",
color: "text-green-600",
},
{
title: "Total Doctors",
value: 5,
icon: HiOutlineUsers,
bg: "bg-blue-100",
color: "text-blue-600",
},
{
title: "Total Patients",
value: 5,
icon: HiOutlineUsers,
bg: "bg-purple-100",
color: "text-purple-600",
},
];
  return (
    <div>
        <div className=" bg-gray-50 p-6 md:p-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-4">
<div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
<HiOutlineShieldCheck className="text-blue-600 text-2xl" />
</div>
<div>
<h1 className="text-2xl font-semibold text-gray-900">
Admin Dashboard
</h1>
<p className="text-gray-500">Welcome back, Admin User</p>
</div>
</div>


 <Link to={'/login'}>
            <Button 
              className="flex items-center gap-2
    bg-white! text-gray-800 border border-gray-300
    hover:bg-blue-600! hover:text-white! 
    transition-colors duration-300">
              <LogOut size={16} />
              Logout
            </Button>
       </Link>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
{stats.map((item, index) => (
<Card key={index} className="rounded-xl bg-white!">
<div className="flex items-center gap-4">
<div
className={`h-12 w-12 flex items-center justify-center rounded-full ${item.bg}`}
>
<item.icon className={`${item.color} text-2xl`} />
</div>
<div>
<h2 className="text-2xl font-semibold text-gray-900">
{item.value}
</h2>
<p className="text-gray-500 text-sm">{item.title}</p>
</div>
</div>
</Card>
))}
</div>
</div>
    </div>
  )
}

export default AdminHeader