"use client";

import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
    return (
        <CardStack items={CARDS} />
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    { id: 0, name: "Follow-up Checkup", purpose: (<p><Highlight>Routine checkup after recent surgery</Highlight></p>), patientName: "Wilson Mwangi", doctorName: "Dr. Smith", specialty: "Orthopedics", date: "June 12, 2024", time: "9:00 AM - 10:00 AM", meetLink: "https://example.com/meet" },
    { id: 1, name: "Dental Checkup", purpose: (<p><Highlight>Regular dental examination</Highlight></p>), patientName: "Mercy Wambui", doctorName: "Dr. Patel", specialty: "Dentistry", date: "June 15, 2024", time: "2:00 PM - 3:00 PM", meetLink: "https://example.com/meet" },
    { id: 2, name: "Annual Physical", purpose: (<p><Highlight>Yearly health assessment</Highlight></p>), patientName: "Kelvin Kimani", doctorName: "Dr. Jones", specialty: "Internal Medicine", date: "June 18, 2024", time: "11:00 AM - 12:00 PM", meetLink: "https://example.com/meet" },
    // { id: 3, name: "Eye Examination", purpose: (<p><Highlight>Vision test and checkup</Highlight></p>), patientName: "Faith Nyambura", doctorName: "Dr. Lee", specialty: "Ophthalmology", date: "June 20, 2024", time: "3:00 PM - 4:00 PM", meetLink: "https://example.com/meet" },
    // { id: 4, name: "Pediatric Consultation", purpose: (<p><Highlight>Consultation for child's health concerns</Highlight></p>), patientName: "Brian Kiptoo", doctorName: "Dr. Williams", specialty: "Pediatrics", date: "June 25, 2024", time: "10:00 AM - 11:00 AM", meetLink: "https://example.com/meet" }
];
