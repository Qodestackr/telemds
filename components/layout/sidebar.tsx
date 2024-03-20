'use client';
import { DashboardNav } from "@/components/dashboard-nav";
import { BadgeDollarSign, BarChart4, BellDot, CalendarClock, LogOut, MessageCircle, ShieldBan, Stethoscope, User, UserCog, } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";

import React, { createContext, useState } from 'react';

import {
  Sidebar as ProSidebar, Menu, MenuItem, SubMenu,
} from 'react-pro-sidebar';


export default function Sidebar() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };
  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
    // <>
    //   <ProSidebar className="h-full w-[200px]" collapsed={menuCollapse}>
    //     <div>
    //       <div className="logotext">
    //         <p>Logo</p>
    //       </div>
    //       <div className="closemenu" onClick={menuIconClick}>
    //         {menuCollapse ? ">" : "<"}
    //       </div>
    //     </div>

    //     <Menu>

    //       <MenuItem>
    //         <Link href={'/dashboard'}>Dashboard</Link>
    //       </MenuItem>

    //       <MenuItem icon={<BarChart4 />}>
    //         <Link href={'/dashboard/analytics'}>Analytics</Link>
    //       </MenuItem>

    //       <SubMenu label="Interaction Center">
    //         <MenuItem icon={<CalendarClock />}> Appointments </MenuItem>
    //         <MenuItem icon={<BellDot />}> Notifications </MenuItem>
    //         <MenuItem icon={<MessageCircle />}> Messages </MenuItem>
    //       </SubMenu>
    //       <SubMenu label="Patient Management">
    //         <MenuItem icon={<Stethoscope />}>Treatment Plans</MenuItem>
    //         <MenuItem icon={
    //           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    //             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    //             stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-medical">
    //             <path d="M12 11v4" /><path d="M14 13h-4" />
    //             <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M18 6v14" />
    //             <path d="M6 6v14" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
    //         }>RX Records</MenuItem>
    //       </SubMenu>

    //       <SubMenu label="Financial Account Details">
    //         <MenuItem icon={<BadgeDollarSign />}>
    //           {1 < 1 ? 'Revenue Insights' : 'Transactions'}
    //         </MenuItem>
    //       </SubMenu>
    //       <SubMenu label="Settings">
    //         <MenuItem icon={<User />}> Account </MenuItem>
    //         <MenuItem icon={<ShieldBan />}> Privacy </MenuItem>
    //         <MenuItem icon={<BellDot />}> Notifications settings </MenuItem>
    //         <MenuItem icon={
    //           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
    //           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-search">
    //             <circle cx="10" cy="8" r="5"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.9-1.9"/>
    //           </svg>
    //         }> Roles </MenuItem>
    //       </SubMenu>
    //       <MenuItem icon={<LogOut />}> Logout </MenuItem>
    //     </Menu>
    //   </ProSidebar>
    // </>
  );
}
