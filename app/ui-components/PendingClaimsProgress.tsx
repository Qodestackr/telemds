import React from 'react'

export default function PendingClaimsProgress() {
    return (
        <div>
            <div className="relative my-10 flex h-full flex-col overflow-hidden rounded-2xl bg-white text-gray-600 shadow-lg ring-1 ring-gray-200">
                <div className="border-b p-6">
                    <h6 className="mb-2 text-base font-semibold">Orders overview</h6>
                    <p className="mb-4 text-sm font-light">
                        <i className="inline-block font-black not-italic text-green-600" aria-hidden="true"></i>
                        <span className="font-semibold">24%</span> this month
                    </p>
                </div>
                <div className="flex-auto p-6">
                    <div className="relative flex flex-col justify-center">
                        <div className="absolute left-4 h-full border-r-2"></div>
                        <div className="relative mb-4">
                            <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">A</span>
                            <div className="ml-12 w-auto pt-1">
                                <h6 className="text-sm font-semibold text-blue-900">$2400, Design changes</h6>
                                <p className="mt-1 text-xs text-gray-500">22 DEC 7:20 PM</p>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">B</span>
                            <div className="ml-12 w-auto pt-1">
                                <h6 className="text-sm font-semibold text-blue-900">New order #1832412</h6>
                                <p className="mt-1 text-xs text-gray-500">21 DEC 11 PM</p>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">C</span>
                            <div className="ml-12 w-auto pt-1">
                                <h6 className="text-sm font-semibold text-blue-900">Server payments for April</h6>
                                <p className="mt-1 text-xs text-gray-500">21 DEC 9:34 PM</p>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <span className="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
                                <span className="text-xl text-orange-600"></span>
                            </span>
                            <div className="ml-12 w-auto pt-1">
                                <h6 className="text-sm font-semibold text-blue-900">New card added for order #4395133</h6>
                                <p className="mt-1 text-xs text-gray-500">20 DEC 2:20 AM</p>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <span className="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
                                <span className="text-xl text-red-600"></span>
                            </span>
                            <div className="ml-12 w-auto pt-1">
                                <h6 className="text-sm font-semibold text-blue-900">Unlock packages for development</h6>
                                <p className="mt-1 text-xs text-gray-500">18 DEC 4:54 AM</p>
                            </div>
                        </div>
                        <div className="relative">
                            <span className="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
                                <span className="text-xl text-blue-900"></span>
                            </span>
                            <div className="ml-12 w-auto pt-1">
                                <h6 className="text-sm font-semibold text-blue-900">New order #9583120</h6>
                                <p className="mt-1 text-xs text-gray-500">17 DEC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

//https://componentland.com/component/orders-overview-3