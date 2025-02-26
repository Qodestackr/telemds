import Link from 'next/link'
import React from 'react'

export default function Profile() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src="/doc/default-doc-profile.png" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                </img>
                                <h1 className="text-xl font-bold">Dr. Sarah Johnson, MD</h1>
                                <p className="text-gray-700">Board-Certified Cardiologist</p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <Link href={'#'} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                        Message
                                    </Link>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                <ul>
                                    <li className="mb-2">Board-Certified Cardiologist</li>
                                    <li className="mb-2">Board-Certified Cardiologist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Doctor Details</h2>
                            <p className="text-gray-700">
                                Dr. Sarah Johnson is a highly skilled and compassionate cardiologist dedicated to providing exceptional
                                cardiovascular care to her patients. With over 15 years of clinical experience, Dr. Johnson specializes
                                in the diagnosis, treatment, and management of various cardiovascular conditions, including coronary artery
                                disease, heart failure, arrhythmias, and hypertension.
                            </p>

                            <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Doctor Key Exp.</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at ABC Company</span>
                                        <span className="text-gray-700">2017 - 2019</span>
                                    </p>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Doctor Key Exp.</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at ABC Company</span>
                                        <span className="text-gray-700">2017 - 2019</span>
                                    </p>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
