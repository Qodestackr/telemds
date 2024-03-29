import { Icons } from "@/components/icons";
import { BadgeDollarSign, BarChart4, BellDot, CalendarClock, LogOut, MessageCircle, ShieldBan, Stethoscope, User, UserCog, } from "lucide-react";

import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  plan: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    plan: "SHIF",
    role: "Patient",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    plan: "SHIF",
    role: "Doctor",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    plan: "SHIF",
    role: "Content-Writer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    plan: "SHIF",
    role: "Lab",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    plan: "SHIF",
    role: "ProductManager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    plan: "SHIF",
    role: "Marketing",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    plan: "SHIF",
    role: "Sales-Team",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    plan: "Private Insurance",
    role: "DevOps-Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    plan: "Custom",
    role: "Data-Engineer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    plan: "SHIF",
    role: "Patient",
    verified: false,
    status: "Active",
  },
];

export type Patient = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  // Financial Account Details
  // Revenue Insights
  // Treatment Plans
  // Patient Management
  // Messages
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: "analytics",
    label: "Analytics",
  },
  {
    title: "E-Triage",
    href: "/dashboard/e-triage",
    icon: "triage",
    label: "E-Triage",
  },
  
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: "message",
    label: "Messages",
  },
  {
    title: "Financial Details",
    href: "/dashboard/financial-details",
    icon: "billing",
    label: "Financial Details",
  },
  // {
  //   title: "User Management",
  //   href: "/dashboard/user",
  //   icon: "user",
  //   label: "user",
  // },
  {
    title: "Patients",
    href: "/dashboard/patient",
    icon: "employee",
    label: "employee",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Book an Appointment",
    href: "/dashboard/book-appointment",
    icon: "appointment",
    label: "book-an-appointment",
  },
  {
    title: "Appointment Manager",
    href: "/dashboard/kanban",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Logout",
    href: "/",
    icon: "login",
    label: "logout",
  },
];
