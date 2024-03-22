"use client";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="afyamed.global"
                href="https://afyamed.global"
            >
                <div className="flex w-full basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">

                    <div className="afyamed-logo">
                        <span className="text-blue-500 font-bold text-3xl mr-1">A</span>
                        <span className="text-teal-500 font-bold text-2xl mr-1">f</span>
                        <span className="text-pink-500 font-bold text-2xl mr-1">y</span>
                        <span className="text-purple-500 font-bold text-2xl mr-1">a</span>
                        <span className="text-yellow-500 font-bold text-2xl">Med</span>
                    </div>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        Where health meets innovation.
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                    <img src="/hospital/appointments-scheduling.jpg" alt="AfyaMEd Hospital Appointment Scheduling" />
                    </div>
                </div>
            </PinContainer>
        </div>
    );
}
