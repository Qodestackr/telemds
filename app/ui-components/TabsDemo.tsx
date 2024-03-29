"use client";

import { UnderConstruction } from "@/components/site-status";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import Image from "next/image";

export function TabsDemo() {
    const tabs = [
        {
            title: "Patient Engagement",
            value: "Patient Engagement",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4  text-white bg-gradient-to-br from-slate-700 to-slate-900">
                    <p>Patient Engagement Services</p>
                    {/* <DummyContent /> */}
                    <p>
                        Track metrics related to patient interactions, satisfaction, and engagement.
                        This tab could include data on consultation duration, appointment frequency,
                        patient feedback, satisfaction ratings, and follow-up appointment rates.
                    </p>
                    <UnderConstruction />
                </div>
            ),
        },
        {
            title: "Practitioner Performance",
            value: "Practitioner Performance",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4  text-white bg-gradient-to-br from-slate-700 to-slate-900">
                    <p>Practitioner Performance Services</p>
                    {/* <DummyContent /> */}
                    <p>
                        Focus on analytics related to healthcare practitioners&apos; performance and productivity.
                        Include metrics such as consultation volume, appointment wait times,
                        practitioner ratings, patient outcomes, and practitioner-patient communication effectiveness.
                    </p>
                    <UnderConstruction />
                </div>
            ),
        },
        {
            title: "Health Outcomes",
            value: "Health Outcomes",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
                    <p>Health Outcomes tab</p>
                    {/* <DummyContent /> */}
                    <p>
                        Provide insights into health outcomes and patient well-being resulting from telemedicine services.
                        This tab could include data on
                        treatment effectiveness, disease management, patient recovery rates, and health improvement trends.
                    </p>
                    <UnderConstruction />
                </div>
            ),
        },
        {
            title: "Location Based Services",
            value: "Location Based Services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4  text-white bg-gradient-to-br from-slate-700 to-slate-900">
                    <p>Location Based Services</p>
                    {/* <DummyContent /> */}
                    <p>
                        This tab could include maps, visualizations, and analytics on patient distribution,
                        healthcare facility locations, service coverage areas, and regional healthcare disparities.
                    </p>
                    <UnderConstruction />
                </div>
            ),
        },
        {
            title: "Telemedicine Access",
            value: "Telemedicine Access",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4  text-white bg-gradient-to-br from-slate-700 to-slate-900">
                    <p>Telemedicine Access tab</p>
                    {/* <DummyContent /> */}
                    <p>
                        Analyze accessibility and utilization patterns of telemedicine services.
                        Include metrics such as geographic distribution of users, demographics of
                        telemedicine users, device usage, internet connectivity, and telemedicine
                        usage trends over time.
                    </p>
                    <UnderConstruction />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <AnimatedTabs tabs={tabs} />
        </div>
    );
}
