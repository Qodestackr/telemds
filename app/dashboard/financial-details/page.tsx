'use client';

import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar, BarChart, Legend, Cell, Pie, PieChart } from 'recharts';
import BreadCrumb from '@/components/breadcrumb';

const data = [
  { year: '2016', consultations: 4000, prescriptions: 2400 },
  { year: '2017', consultations: 3000, prescriptions: 1398 },
  { year: '2018', consultations: 2000, prescriptions: 9800 },
  { year: '2019', consultations: 2780, prescriptions: 3908 },
  { year: '2020', consultations: 1890, prescriptions: 4800 },
  { year: '2021', consultations: 2390, prescriptions: 3800 },
  { year: '2022', consultations: 3490, prescriptions: 4300 },
]


const TelemedConsultationDurationChartData = [
  {
    month: "Jan",
    consultations: 200,
    averageDuration: 12,
  },
  {
    month: "Feb",
    consultations: 220,
    averageDuration: 13,
  },
  {
    month: "Mar",
    consultations: 250,
    averageDuration: 14,
  },
  {
    month: "Apr",
    consultations: 240,
    averageDuration: 12.5,
  },
  {
    month: "May",
    consultations: 280,
    averageDuration: 13.5,
  },
  {
    month: "Jun",
    consultations: 300,
    averageDuration: 14,
  },
  {
    month: "Jul",
    consultations: 320,
    averageDuration: 14.5,
  },
];
// Sample dummy data for patient visits
const visitsData = [
  { month: 'Jan', visits: 200 },
  { month: 'Feb', visits: 220 },
  { month: 'Mar', visits: 210 },
  { month: 'Apr', visits: 230 },
  { month: 'May', visits: 240 },
  { month: 'Jun', visits: 250 },
];

const PieChartPlotData = [
  {
    name: "General Consultation",
    value: 450,
  },
  {
    name: "Specialist Consultation",
    value: 300,
  },
  {
    name: "Follow-up Consultation",
    value: 200,
  },
  {
    name: "Emergency Consultation",
    value: 150,
  },
];

const PieChartPlotColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f0e"];


/*********************************************************************************** */
// 
/*********************************************************************************** */
export default function FinancialDetails() {
  return (
    <ScrollArea className='container'>
      <BreadCrumb items={[{ title: "Financial Details", link: "/dashboard/Financial Details" }]} />

      <section className="flex flex-col justify-between items-center w-fu md:items-start md:flex-row flex-wrap gap-2">

        <div className="flex-1 px-2 justify-center bg-gray-700 shadow rounded h-300px">
          <div className="">
            <p className="text-blue-300 font-bold">Total Claims Processed</p>
            <p className="py-4 font-bold text-purple-400">325</p>
            <p className="text-green-300">+3.85%</p>
          </div>
        </div>

        <div className="flex-1 px-2 justify-center bg-gray-700 shadow rounded max-h-300px">
          <div className="">
            <p className="text-blue-300 font-bold">Average Claim Amount</p>
            <p className="py-4 font-bold text-purple-400">KES.3,203 </p>
            <p className="text-red-400">-14.5%</p>
          </div>
        </div>

        <div className="flex-1 px-2 justify-center  bg-gray-700 shadow rounded max-h-300px">
          <div className="">
            <p className="text-blue-300 font-bold">Average Reimbursement Time</p>
            <p className="py-4 font-bold text-purple-400">undefined</p>
            <p className="text-green-300">undefined</p>
          </div>
        </div>

        <div className="flex-1 px-2 justify-center  bg-gray-700 shadow rounded h-300px">
          <div className="">
            <p className="text-blue-300 font-bold">Claims Approval Rate</p>
            <p className="py-4 font-bold text-purple-400 ">450 / month</p>
            <p className="text-green-300">+34.5%</p>
          </div>
        </div>

      </section>

      <section className="flex my-4 px-4 gap-3">
        <div className=" bg-white rounded shadow-lg p-4 border border-green-300">
          {/* TelemedConsultationsChart */}
          <div>
            <span className='mt-2'>
              Visualizing your trend of telemedicine consultations over time
            </span>
            <AreaChart width={730} height={250} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="consultations" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="prescriptions" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
          </div>
          {/*  */}
        </div>
        <div className="w-full h-[300px] bg-white rounded shadow-lg p-4 border border-green-300">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quae?
          </span>
        </div>
      </section>
      {/*  */}
      <section className="flex my-4 px-4 gap-3">
        <div className="h-[300px] bg-white rounded shadow-lg p-4 border border-green-300">
          <BarChart width={730} height={250} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="consultations" fill="#82ca9d" name="Number of Consultations" />
            <Bar dataKey="averageDuration" fill="#FA8072" name="Average Duration (minutes)" />
          </BarChart>
        </div>
        <div className="w-full h-[300px] bg-white rounded shadow-lg p-4 border border-green-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impedit dolores temporibus id corporis,
          sunt dicta ipsam quia nobis aliquam!
        </div>
      </section>

      {/*  */}

      <section className="flex my-4 px-4 gap-2">

        <div className="w-1/2 bg-white rounded shadow-lg p-4 border border-green-300">
          <h1 className='text-blue-500'>Distribution of Consultation Types</h1>
          <PieChart width={400} height={400}>
            <Pie
              data={PieChartPlotData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={PieChartPlotColors[index % PieChartPlotColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="h-full bg-white rounded shadow-lg p-4 border border-green-300">
          Some Descriptions of Key Metrics
        </div>
      </section>
    </ScrollArea>
  )
}
