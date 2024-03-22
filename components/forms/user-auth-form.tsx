"use client";
import Dividers from "@/app/ui-components/Dividers";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    email: "demo@gmail.com",
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    signIn("credentials", {
      email: data.email,
      callbackUrl: callbackUrl ?? "/dashboard",
    });
  };

  return (
    <>

      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/background.svg')" }}>
            </div>
          </div>

          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              Logo
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => { }}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4" />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853" />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04" />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335" />
                      </svg>
                    </div>
                    <span className="ml-4">
                      Sign In with Google
                    </span>
                  </button>
                </div>

                <div className="mb-10 flex items-center justify-center gap-2 my-3">
                  <svg className="mx-auto block h-4 w-auto align-middle text-blue-800" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 11 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 46 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 81 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 116 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 151 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 18 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 53 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 88 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 123 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 158 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 25 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 60 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 95 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 130 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 165 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 32 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 67 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 102 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 137 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 172 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 39 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 74 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 109 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 144 1)"></line>
                  </svg>
                  Email/Password
                  <svg className="mx-auto block h-4 w-auto align-middle text-blue-800" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 11 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 46 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 81 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 116 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 151 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 18 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 53 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 88 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 123 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 158 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 25 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 60 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 95 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 130 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 165 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 32 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 67 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 102 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 137 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 172 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 39 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 74 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 109 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 144 1)"></line>
                  </svg>
                </div>

                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email" placeholder="Email" />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password" placeholder="Password" />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <Link href={'/dashboard'}>
                    <span className="mx-2">
                      Sign In
                    </span>
                    </Link>
                  </button>

                  <span className="block text-blue-500 my-3">
                    No account yet?
                    
                    <Link href={'/auth/signup'} className="text-green-400 underline">
                      {'  '} Register instead
                    </Link>
                  </span>


                  {/* <Divider>
                    Reset Password.
                  </Divider> */}

                  <span className="text-center block text-blue-500 my-3">
                    <Link href={'/auth/reset-password'} className="text-blue-600 underline">
                      {'  '} Reset Password
                    </Link>
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
