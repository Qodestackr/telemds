import DeletePopup from '@/components/forms/delete-popups'
import React from 'react'
import Dividers from './Dividers'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlarmClock, CalendarCheck, Video } from 'lucide-react'
import { CardStackDemo } from './CardStackDemo'
import Profile from '@/components/Profile'
import { AfyaMedGlobe } from '@/components/AfyaMedGlobe'
import CreditCards2 from '../../components/@deprecated/CreditCards2'
import { MacbookScrollDemo } from './AfyaMedMacScrollDemo'
import { HeroScrollDemo } from './HeroScrollDemo'
import { AnimatedPinDemo } from './3DPinDemo'
import { TabsDemo } from './TabsDemo'


const UpcomingSchedule = () => {
    return (
        <Link href={'/ui-components'}>
            <div className="bg-gray-50 rounded-lg shadow-md p-4 flex w-1/2 mx-auto  flex-col">
                <div className="flex justify-between gap-1 items-center w-full">
                    <div className="flex-shrink-0 mr-4">
                        <img src="/doc/default-doc-profile.png" alt="Doctor" className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-xl font-semibold">Dr. Eunice</h2>
                        <p className="text-gray-600 text-sm">General Practitioner</p>
                    </div>
                    <svg className="mx-auto block h-4 w-auto align-middle text-blue-800" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 11 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 46 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 81 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 116 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 151 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 18 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 53 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 88 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 123 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 158 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 25 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 60 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 95 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 130 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 165 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 32 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 67 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 102 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 137 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 172 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 39 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 74 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 109 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 144 1)"></line>
                    </svg>
                    <div className="ml-2 bg-blue-500 rounded-full p-2">
                        <Video className="text-white" size={24} />
                    </div>
                </div>


                <div className="bg-blue-200  mt-3 px-4 py-4 rounded-lg flex justify-between items-center">
                    <p className="font-semibold flex">
                        <CalendarCheck />
                        June 12, 2024</p>
                    <div className='flex'>
                        <AlarmClock />
                        <span>9:00 AM - 10:00 AM</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const appointment = {
    name: "Follow-up Checkup",
    purpose: "Routine checkup after recent surgery",
    patientName: "John Doe",
    doctorName: "Dr. Smith",
    specialty: "Orthopedics",
    date: "June 12, 2024",
    time: "9:00 AM - 10:00 AM",
    meetLink: "https://example.com/meet"
};

const UpcomingScheduleDetails = ({ appointment }: any) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Appointment Name:</span>
                <span className="ml-2">{appointment.name}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Purpose:</span>
                <span className="ml-2">{appointment.purpose}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Patient Name:</span>
                <span className="ml-2">{appointment.patientName}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Doctor Name:</span>
                <span className="ml-2">{appointment.doctorName}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Specialty:</span>
                <span className="ml-2">{appointment.specialty}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Session:</span>
                <span className="ml-2">{appointment.date} at {appointment.time}</span>
            </div>
            <div className="flex justify-end mt-6">
                <a href={appointment.meetLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600">Join Appointment</a>
            </div>
        </div>
    );
};


export default function page() {
    return (
        <div className='bg-white'>
            <AnimatedPinDemo />
            <HeroScrollDemo />
            <AfyaMedGlobe />

            <TabsDemo />

            {/* <CreditCards2 /> */}
            {/* <div>
                <DeletePopup />
            </div> */}

            <MacbookScrollDemo />
            <Profile />
            {/* <div>
                <Dividers />
            </div> */}

            {/* <UpcomingSchedule /> */}
            <CardStackDemo />

            {/* <div className="container mx-auto my-3">
            <UpcomingScheduleDetails appointment={appointment} />
            </div> */}

            <div className="flex flex-wrap text-slate-800">
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="flex flex-col justify-center py-12 md:justify-start md:pl-12">
                        <Link href="/ui-components" className="text-2xl font-bold text-blue-600"> AfyaMed HealthCloud </Link>
                        <span className="mt-2 text-lg font-medium text-gray-700">Your virtual healthcare hub</span>
                    </div>
                    <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
                        <div className="flex w-full flex-col rounded-2xl bg-white px-2 sm:px-14">
                            <div className="mx-auto w-full max-w-md pb-20 px-8 sm:px-0">
                                <div className="relative">
                                    <div className="absolute left-0 top-2 h-0.5 w-full bg-gray-200" aria-hidden="true">
                                        <div className="absolute h-full w-1/3 bg-gray-900"></div>
                                        <div className="left absolute left-1/3 h-full w-1/3 bg-gradient-to-r from-gray-900"></div>
                                    </div>
                                    <ul className="relative flex w-full justify-between">
                                        <li className="text-left">
                                            <Link className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white" href="/">1</Link>
                                        </li>
                                        <li className="text-left">
                                            <Link className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-white ring ring-blue-600 ring-offset-2" href="/">2</Link>
                                        </li>
                                        <li className="text-left">
                                            <Link className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="/">3</Link>
                                        </li>
                                        <li className="text-left">
                                            <Link className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="/">4</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h2 className="font-serif text-2xl font-semibold text-gray-700">Hospital Type</h2>
                            <p>
                                Each level offers varying degrees of medical services, from basic primary care to specialized tertiary treatments.
                                Select the appropriate level based on the scope and complexity of services your facility will provide.
                            </p>
                            <div className="mt-8 flex w-full flex-col pb-8">
                                <div className="relative mb-4">
                                    <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                                    <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
                                    <label className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16" htmlFor="radio_1">
                                        <span className="mb-2 text-lg font-semibold">General Hospital</span>
                                        <p className="text-sm sm:text-base">
                                            A General Hospital offers a broad spectrum of medical services, spanning primary, secondary, and tertiary care.
                                            It serves as a central hub for diverse specialties, providing outpatient and inpatient treatments.
                                        </p>
                                    </label>
                                </div>
                                <div className="relative mb-4">
                                    <input className="peer hidden" id="radio_2" type="radio" name="radio" />
                                    <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
                                    <label className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16" htmlFor="radio_2">
                                        <span className="mb-2 text-lg font-semibold">Specialty Hospital</span>
                                        <p className="text-sm sm:text-base">
                                            A Specialty Hospital focuses on specific areas of healthcare or medical specialties, offering specialized
                                            services and expertise in particular fields.
                                            It may be dedicated to a single specialty or a few related specialties.
                                        </p>
                                    </label>
                                </div>

                                <div className="relative mb-4">
                                    <input className="peer hidden" id="radio_2" type="radio" name="radio" />
                                    <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
                                    <label className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16" htmlFor="radio_2">
                                        <span className="mb-2 text-lg font-semibold">Outpatient Facility</span>
                                        <p className="text-sm sm:text-base">
                                            An Outpatient Facility offers medical services and consultations primarily for patients who
                                            do not require overnight stays. It may be operated by a single practitioner or a team of healthcare
                                            professionals, catering to various medical specialties or general practice.
                                        </p>
                                    </label>
                                </div>
                                <div className="my-4 space-y-3">
                                    <label htmlFor="terms" className="flex space-x-4">
                                        <input id="terms" name="terms" type="checkbox" className="h-6 w-6 shrink-0 accent-gray-900 cursor-pointer" />
                                        <span id="terms-description" className="text-sm text-gray-600">I agree to the
                                            <Link className="underline" href="/">Terms and Conditions</Link>.
                                            Learn about our Privacy Policy and our measures to keep your data safe and secure.
                                        </span>
                                    </label>
                                </div>

                                <button className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white">
                                    Continue
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex-col justif-start bg-slate-700 bg-gradient-to-br md:flex md:w-1/2">
                    <div className="py-16 px-8 text-gray-50 xl:w-[40rem]">

                        <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">Revolutionizing Healthcare Access</span>
                        <p className="my-6 text-2xl font-semibold leading-10">
                            AfyaMed brings your hospital to your patients&apos; fingertips, breaking geographical barriers.
                            <span className="whitespace-nowrap py-2 text-cyan-300">{' '}Empowerment and Connection.</span>
                        </p>

                        <p className="mb-4">
                            Empower your hospital to become a global healthcare leader with AfyaMed. Deliver personalized medical care directly
                            to patients worldwide, bridging geographical barriers and ensuring access to quality treatment anytime, anywhere.
                        </p>
                        <Link href={'/'} className="font-semibold tracking-wide text-white underline underline-offset-4">
                            <Button className='bg-blue-500'>
                                Learn More
                            </Button>
                        </Link>
                    </div>
                    <img className="ml-8 w-11/12 max-w-lg rounded-lg object-cover" src="/hospital/online-v-hosz.png" />
                </div>
            </div>
        </div>
    )
}


// Hospital Departments & Staff Setup 
// Branding & Confirmation