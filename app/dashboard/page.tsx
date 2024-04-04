import React from 'react'
import Link from "next/link";

import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentTransactions } from "@/components/recent-sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTAShimmerButton from '@/components/ui/CTAShimmerButton';
import { CardStackDemo } from './CardStackDemo';

export default function DashboardMain() {
  return (
    <>
      <div className="flex items-end justify-center space-y-2 mb-10">
        {/* <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2> */}
        {/* <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Link href={'/dashboard/book-appointment'}>
              <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">
                  Request Consultation
                </span>
              </button>
            </Link>
          </div> */}
        <CardStackDemo />
      </div>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">

        <Tabs defaultValue="overview">
          {/*  */}
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          {/*  */}
          <TabsContent value="overview" >
            <div className="flex flex-col md:flex-row justify-even items-center gap-1 flex-wrap">
              <Link href={'/dashboard/financial-details'} className='p-2'>
                <Card className='w-[300px] h-[250px]'>
                  <CardTitle>Insurance Claims</CardTitle>
                  <CardDescription>
                    Check the status of insurance claims and track their resolution.
                  </CardDescription>
                  <CardContent>
                    <p>View the status of insurance claims, including whether they have been resolved or are still pending. Keep track of payments and reimbursements received for medical services rendered.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={'/dashboard/appointment-manager'}>
                <Card className='w-[300px] h-[250px] p-2'>
                  <CardTitle>Scheduled Appointments</CardTitle>
                  <CardDescription>
                    View and manage your upcoming appointments with healthcare providers.
                  </CardDescription>
                  <CardContent>

                    <p>Access your scheduled meetings and appointments with healthcare providers. You can view details, reschedule, or cancel appointments as needed.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href={'/dashboard/patient'}>
                <Card className='w-[300px] h-[250px] p-2'>
                  <CardTitle>Lab Results</CardTitle>
                  <CardDescription>
                    Check the status of Lab Results.
                  </CardDescription>
                  <CardContent>
                    Check and review test results, track patient health progress, and discuss findings and further consultations.
                  </CardContent>
                </Card>
              </Link>

              <Link href={'/dashboard/patient'}>
                <Card className='w-[300px] h-[250px] p-22'>
                  <CardTitle>Patient Medical Records</CardTitle>
                  <CardDescription>
                    Access and review patient medical records and history.
                  </CardDescription>
                  <CardContent>
                    <p>View comprehensive medical records and history of patients, including past diagnoses, treatments, medications, and any relevant notes or comments. Use this information to make informed decisions and provide personalized care to patients.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>
          {/*  */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES. {'45,231.89'}</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Transactions
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Consultations Completed</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monthly Active Users
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>
                    <span>Recent Transactions</span>
                    {/* <span>
                      <Link href={'/dashboard'}>
                        <Button>
                          Reset
                        </Button>
                      </Link>
                    </span> */}
                  </CardTitle>
                  <CardDescription>
                    You made 265 Transactions this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentTransactions />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

    </>
  );
}


/**
Onboarding Actions:

Complete Profile: Provide or update personal information, medical history, and contact details.
Add Insurance Plan: Enter insurance details to streamline billing and coverage verification processes.
Set Communication Preferences: Choose preferred communication channels for appointment reminders, notifications, and updates.


Appointment Management Actions:

Schedule an Appointment: Book virtual consultations with healthcare providers based on availability.
View Appointment History: Access a record of past and upcoming appointments for reference.
Reschedule or Cancel Appointment: Modify existing appointments as needed to accommodate changes in schedule or preferences.


Health Management Actions:

Track Health Metrics: Monitor and record vital signs, symptoms, or health-related data for ongoing management and review.
Access Lab Results: View recent lab test results, diagnostic reports, or imaging studies for informed decision-making.
Request Prescription Refill: Submit refill requests for ongoing medication prescriptions directly to healthcare providers.
*/