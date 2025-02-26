import React from 'react'

export default function PaidDoctorCard() {
    return (
        <div>
            <div className="text-slate-600 mx-auto grid max-w-2xl grid-cols-2 gap-y-4 px-4 py-1 sm:my-10 sm:rounded-md sm:border sm:shadow">
                <div className="col-span-2 col-start-1 flex flex-col justify-between border-b py-3 sm:flex-row">
                    <p className="font-medium">Overview</p>
                    <select className="text-slate-500 hover:bg-slate-200 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring">
                        <option value="last-month">Last Month</option>
                        <option value="last-month">Last 2 Months</option>
                        <option value="last-month">This Year</option>
                    </select>
                </div>
                <div className="col-span-2 -mx-4 bg-gradient-to-t from-indigo-500 to-blue-500 px-4 py-8 sm:col-span-1 sm:mx-0 sm:rounded-xl sm:py-4">
                    <p className="mb-4 font-medium text-indigo-100">Cases in pipeline</p>
                    <div className="mb-6 flex max-w-xs">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-400 sm:mr-3 sm:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                        </div>
                        <div className="px-4">
                            <p className="mb-1 text-2xl font-black text-white">1844</p>
                            <p className="font-medium text-indigo-100">$192,234.00</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div className="flex flex-col items-center px-4 py-1">
                            <p className="text-lg font-medium text-white">232</p>
                            <p className="text-xs font-medium text-indigo-100">Quote</p>
                        </div>
                        <div className="mb-1 flex flex-col items-center px-4 py-1 sm:mr-1 sm:mb-0">
                            <p className="text-lg font-medium text-white">$140</p>
                            <p className="text-xs font-medium text-indigo-100">CAC</p>
                        </div>
                        <div className="mb-1 flex flex-col items-center rounded-2xl bg-white px-4 py-1 sm:mr-1 sm:mb-0">
                            <p className="text-lg font-medium text-indigo-500">21</p>
                            <p className="text-xs font-medium text-indigo-500">Refunds</p>
                        </div>
                        <div className="flex flex-col items-center px-4 py-1">
                            <p className="text-lg font-medium text-white">$44</p>
                            <p className="text-xs font-medium text-indigo-100">PPC</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4 py-4 sm:col-span-1 sm:gap-8 sm:px-4">
                    <div className="">
                        <p className="text-lg font-bold">32</p>
                        <p className="text-slate-400 mb-2 font-medium">$230,000</p>
                        <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium">Drafts</span>
                    </div>
                    <div className="">
                        <p className="text-lg font-bold">621</p>
                        <p className="text-slate-400 mb-2 font-medium">$230,000</p>
                        <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600">Prending Approval</span>
                    </div>
                    <div className="">
                        <p className="text-lg font-bold">68</p>
                        <p className="text-slate-400 mb-2 font-medium">$230,000</p>
                        <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Clients</span>
                    </div>
                    <div className="">
                        <p className="text-lg font-bold">970</p>
                        <p className="text-slate-400 mb-2 font-medium">$230,000</p>
                        <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600">Signing</span>
                    </div>
                </div>
                <div className="col-span-2 col-start-1 grid grid-cols-2 gap-6 border-t py-4 sm:grid-cols-4 sm:px-4 sm:py-8">
                    <div className="">
                        <p className="text-slate-500 text-sm">Revenue</p>
                        <p className="text-xl font-medium">$924,883</p>
                    </div>
                    <div className="">
                        <p className="text-slate-500 text-sm">Liabilities</p>
                        <p className="text-xl font-medium">$924,883</p>
                    </div>
                    <div className="">
                        <p className="text-slate-500 text-sm">Profit</p>
                        <p className="text-xl font-medium">$213,002</p>
                    </div>
                    <div className="">
                        <p className="text-slate-500 text-sm">Target</p>
                        <p className="text-xl font-medium">$150,000</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
// https://componentland.com/component/stats-overview-1