"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";


export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                // users={users}
                titleComponent={
                    <>
                        <h1 className="text-3xl font-normal text-slate-200 dark:text-white">
                            Innovating for your well-being <br />
                            <span className="text-4xl md:text-[6rem] font-bold my-2 leading-none">
                                cutting-edge telecare.
                            </span>
                        </h1>
                    </>
                }
            />
        </div>
    );
}

export const users = [
    {
        name: "24/7 Virtual Consultations",
        designation: "24/7 Virtual Consultations",
        image: "/hospital/appointments-scheduling.jpg",
        badge: "🕒💻",
    },
    {
        name: "Prescription Refills",
        designation: "Prescription Refills",
        image: "/doc/default-doc-profile.png",
        badge: "💊🔄",
    },
    {
        name: "Specialist Referrals",
        designation: "Specialist Referrals",
        image: "/doc/default-doc-profile.png",
        badge: "🎓🔗",
    },
    {
        name: "Secure Messaging",
        designation: "Secure Messaging",
        image: "/doc/default-doc-profile.png",
        badge: "🔒💬",
    },
    {
        name: "Teletherapy Services",
        designation: "Teletherapy Services",
        image: "/hospital/therapy-services.webp",
        badge: "🛋️💬",
    },
    {
        name: "Chronic Disease Management",
        designation: "Chronic Disease Management",
        image: "/hospital/healthTech_.jpg",
        badge: "⏳🩺",
    },
    // {
    //     name: "Health & Wellness Programs",
    //     designation: "Health & Wellness Programs",
    //     image: "/doc/default-doc-profile.png",
    //     badge: "💊🔄",
    // },
    {
        name: "Digital Health Records",
        designation: "Digital Health Records",
        image: "/hospital/HC-Medical-Records-Digital.jpg",
        badge: "📂💻",
    },
    {
        name: "Virtual Clinic",
        designation: "Virtual Clinic",
        image: "/hospital/Virtual-Clinic.jpg",
        badge: "Something",
    },
    {
        name: "Home-based Baby Vaccinations",
        designation: "Home-based Baby Vaccinations",
        image: "/hospital/home-based-baby-vaccinations.jpg",
        // badge: "💊🔄",
    },
];
