'use client';

import { Bank, CashOrOther, MasterCard, Visa } from "@/app/ui-components/PaymentMethodCard";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function ProfileSettings() {
  return (

    <div className="mx-4  sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
      <div className="">
        {/* <div className="relative my-4 sm:hidden">
            <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
            <label htmlFor="select-1" className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring">Accounts </label>
            <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Accounts</li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Team</li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Others</li>
            </ul>
          </div> */}

        {/* <div className="col-span-2 hidden sm:block">
            <ul>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Accounts</li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Users</li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Profile</li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Teams</li>
              <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">Billing</li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Notifications</li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Integrations</li>
            </ul>
          </div> */}

        <div className="col-span-8 rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
          <div className="pt-4">
            <h1 className="py-2 text-2xl font-semibold">Payment Settings</h1>
          </div>
          <hr className="mt-4 mb-8" />

          <div className="mb-10 grid gap-y-8 lg:grid-cols-2 lg:gap-y-0">
            <div className="space-y-8">
              <Button className="flex justify-end items-end bg-blue-600 text-white">
                Change Payment
              </Button>
              <MasterCard />
            </div>

            <div className="grid gap-y-6 gap-x-3 sm:grid-cols-2 lg:px-8">
              <label className="block" htmlFor="name">
                <p className="text-sm">Name</p>
                <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="Eunice Njeri" />
              </label>
              <label className="block" htmlFor="name">
                <p className="text-sm">Email Address</p>
                <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="eunice.njeri@corpora.de" />
              </label>
              <label className="block sm:col-span-2" htmlFor="name">
                <p className="text-sm">Physical Address</p>
                <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="Thindigua, Kiambu Road" />
              </label>
              <label className="block" htmlFor="name">
                <p className="text-sm">Member Number</p>
                <input className="w-full disabled rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="6346322" />
              </label>
              <label className="block" htmlFor="name">
                <p className="text-sm">Country</p>
                <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="Kenya" />
              </label>
            </div>
          </div>

          <div className="amx-auto mb-10 overflow-hidden rounded-lg border bg-white">
            <p className="mb-6 bg-gray-100 py-1 text-center text-lg font-medium">Transaction History</p>
            <table className="w-full">
              <thead>
                <td className="text-center font-semibold">Date</td>
                <td className="text-center font-semibold">Invoice #</td>
                <td className="text-center font-semibold">Amount</td>
                <td className="text-center font-semibold"></td>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                  <td className="border-b py-2 text-center text-sm">QACBN543242</td>
                  <td className="border-b py-2 text-center text-sm">KES. 2, 100</td>
                  <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">Export PDF</button></td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                  <td className="border-b py-2 text-center text-sm">QACBN543242</td>
                  <td className="border-b py-2 text-center text-sm">KES. 2, 100</td>
                  <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">Export PDF</button></td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                  <td className="border-b py-2 text-center text-sm">QACBN543242</td>
                  <td className="border-b py-2 text-center text-sm">KES. 2, 100</td>
                  <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">Export PDF</button></td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                  <td className="border-b py-2 text-center text-sm">QACBN543242</td>
                  <td className="border-b py-2 text-center text-sm">KES. 2, 100</td>
                  <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">Export PDF</button></td>
                </tr>
              </tbody>
            </table>
            <div className="my-3 flex justify-center items-center">
              <Button className="bg-blue-500 text-white">
                <span><ChevronDown /></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CashOrOther />
      <br />
      <MasterCard />
      <br />
      <Visa />

    </div>
  )
}


/**
https://componentland.com/component/sidebar-css-only-dropdowns-2
https://componentland.com/component/responsive-app-shell-2
https://componentland.com/components/all/settings
*/