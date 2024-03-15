'use client';

import { DemoShareDocument } from '@/app/examples/cards/components/share-document'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
})

export function CalendarForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            {/* <FormLabel>Date of birth</FormLabel> */}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Disabled dates means selected doctor is not available for that day,
                                if it does not suite you, kindly select another doc.
                                {/* Your date of birth is used to calculate your age. */}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <Button type="submit">Submit</Button> */}
            </form>
        </Form>
    )
}



export default function page() {

    return (
        <ScrollArea className='h-full'>
            <div>
                {/* <DemoShareDocument /> */}
                {/*  */}
                <div>
                    {/* <div className="relative mx-auto mt-20 mb-20 overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
                        <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">Book an appointment</h1>
                        <p className="mt-6 text-lg text-white">Get an appointment with our experienced accountants</p>
                        <img className="absolute top-0 left-0 -z-10 h-full w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div> */}
                    <p>
                        {/* Meeting duration
                        <button>30 mins</button>
                        Now displaying start times for 30 mins blocks available on March 14th.
                        What time works best?
                        Showing times for March 14, 2024 */}
                        {/* https://tailwindit.co/book-meeting */}
                    </p>

                    <div className="mx-auto grid px-6 pb-20">
                        <div className="">
                            <p className="font-serif text-xl font-bold text-blue-900">Select a service</p>
                            <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                                <div className="relative">
                                    <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                                    <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
                                    <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" htmlFor="radio_1">
                                        <span className="mt-2- font-medium">
                                            Primary Care Consultation
                                        </span>
                                        <span className="text-xs uppercase">1 Hour</span>
                                    </label>
                                </div>
                                <div className="relative">
                                    <input className="peer hidden" id="radio_2" type="radio" name="radio" />
                                    <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                                    <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" htmlFor="radio_2">
                                        <span className="mt-2 font-medium">
                                            Specialist Consultation (e.g., Cardiology, Dermatology)
                                        </span>
                                        <span className="text-xs uppercase">1 Hour</span>
                                    </label>
                                </div>
                                <div className="relative">
                                    <input className="peer hidden" id="radio_3" type="radio" name="radio" />
                                    <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                                    <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" htmlFor="radio_3">
                                        <span className="mt-2 font-medium">
                                            Mental Health Counseling
                                        </span>
                                        <span className="text-xs uppercase">1 Hour</span>
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div className="">
                            <p className="mt-8 font-serif text-xl font-bold text-blue-900">Select a date</p>
                            <div className="relative mt-4 w-56">
                                <CalendarForm />

                                {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg aria-hidden="true" className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input datepicker-orientation="bottom" type="text" className="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" placeholder="Select date" /> */}
                            </div>
                        </div>

                        <div className="">
                            <p className="mt-8 font-serif text-xl font-bold text-blue-900">Select a time</p>
                            <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
                                <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
                                <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">14:00</button>
                                <button className="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white active:scale-95">09:00</button>
                                <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
                                <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">15:00</button>
                                <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
                                <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">14:00</button>
                                <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
                            </div>
                        </div>
                        <Link href={'/dashboard/book-appointment/payment'}>
                            <button className="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">Book Now</button>

                        </Link>

                    </div>
                </div>

                {/*  */}
            </div>
        </ScrollArea>
    )
}
