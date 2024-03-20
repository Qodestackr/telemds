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


export default function DashboardMain() {
  return (
    <ScrollArea className="h-full">

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Link href={'/dashboard/book-appointment'}>
              <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">
                  Request Consultation
                </span>
              </button>
            </Link>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics"
            // disabled
            >
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
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
                    <span>
                      <Link href={'/'}>
                        <Button>

                        </Button>
                      </Link>
                    </span>
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
          {/* Analytics Section , For basic user stuff and/or others */}
          <TabsContent value="analytics" className="space-y-4">
            <div className=" bg-white2">
              <div className="z-10 mx-auto w-full px-6 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-16">
                <div className="mb-12">
                  <div className="lg:flex-no-wrap -mx-3 flex flex-row flex-wrap items-end">
                    <div className="mr-auto w-full flex-grow px-3">
                      <h3 className="text-xl font-light text-slate-600">Book a virtual consultation with a healthcare provider.</h3>
                    </div>
                  </div>
                </div>
                <div className="-mx-2 flex flex-wrap font-bold">
                  <div className="mb-4 w-full px-2 lg:w-3/5">
                    <div className="h-full w-full bg-blue-900">
                      <div className="z-10 flex flex-col justify-between">
                        <h1 className="text-3xl text-white">#1</h1>
                        <h6 className="mt-12 text-xl text-white sm:text-3xl">Schedule Appointment.</h6>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 w-full px-2 lg:w-2/5">
                    <div className="h-full w-full bg-yellow-400 p-6">
                      <div className="z-10 flex flex-col justify-between">
                        <h1 className="text-xl font-light text-blue-900">We are SHIF Compliant</h1>
                        <Button className="mt-12 text-2xl text-white p-6 bg-blue-500">
                          <Link href={'/dashboard/insurance-plan/add'}>
                          Add Insurance Plan
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4 w-full px-2 lg:w-1/3">
                    <div className="h-full w-full bg-indigo-600 p-6">
                      <div className="absolute z-0 opacity-0 hover:opacity-50" style={{ mixBlendMode: "multiply" }}></div>
                      <div className="z-10 flex flex-col justify-between">
                        <h1 className="text-4xl text-white">70+</h1>
                        <h6 className="mt-12 text-xl text-white sm:text-3xl">Awards</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 w-full px-2 lg:w-1/3">
                    <div className="h-full w-full bg-blue-400 p-6">
                      <div className="z-10 flex flex-col justify-between">
                        <h1 className="text-4xl text-white">12k</h1>
                        <h6 className="mt-12 text-xl text-white sm:text-3xl">Access Lab Results</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 w-full px-2 lg:w-1/3">
                    <div className="h-full w-full bg-red-200 p-6">
                      <div className="z-10 flex flex-col justify-between">
                        <h1 className="text-4xl text-blue-900">23</h1>
                        <h6 className="mt-12 text-xl text-blue-900 sm:text-3xl">Fortune 500 Clients</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </TabsContent>
        </Tabs>
      </div>

    </ScrollArea>
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