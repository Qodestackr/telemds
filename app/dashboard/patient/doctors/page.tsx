import React from 'react'
import { OrthopedicDoctorCard } from './DoctorCard'
import Link from 'next/link'

export default function SelectDoctor() {
    return (
        <main className="container mx-auto gap-2 flex justify-between flex-wrap items-center">
            <Link href={'/dashboard/patient/doctors/doc-id'}>
                <OrthopedicDoctorCard />
            </Link>

            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
        </main>
    )
}
