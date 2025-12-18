import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";

function AdminSideBar() {
  return (
    <aside
      className="
        fixed 
        top-23 
        left-4
        w-50 
        h-[calc(100vh-7rem)]
        bg-white 
        rounded-3xl 
        shadow-xl 
        border border-gray-200
      "
    >
      <Sidebar
        aria-label="Admin Sidebar"
        className="h-full bg-transparent rounded-none"
      >
        <SidebarItems className="flex flex-col justify-between h-full px-2">
          
          {/* MAIN MENU */}
          <div>
            {/* ADMIN PANEL TITLE */}
            <h2 className="text-xl text-gray-50 px-3">
              Admin Panel
            </h2>
          <SidebarItemGroup>
           
            <SidebarItem href="/admin-users" icon={HiUser}>
              Pending
            </SidebarItem>
            <SidebarItem href="/admin-providers" icon={HiShoppingBag}>
              All Doctors
            </SidebarItem>
            <SidebarItem href="/admin-users" icon={HiInbox}>
              All Patients
            </SidebarItem>
            <SidebarItem icon={HiViewBoards}>
              Settings
            </SidebarItem>
          </SidebarItemGroup>
          </div>

          {/* FOOTER MENU */}
          <SidebarItemGroup>
            <SidebarItem icon={BiBuoy}>
              Help
            </SidebarItem>
          </SidebarItemGroup>

        </SidebarItems>
      </Sidebar>
    </aside>
  );
}

export default AdminSideBar;