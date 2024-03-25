import React from 'react'
import { HeroScrollDemo } from './ui-components/HeroScrollDemo'
import { AfyaMedGlobe } from '@/components/AfyaMedGlobe'
import { MacbookScrollDemo } from './ui-components/AfyaMedMacScrollDemo'
import CardDoctorType from './doctor-type-card'
import { OrthopedicDoctorCard } from './DoctorCard'

export default function page() {
    return (
        <>
            <CardDoctorType />
            <OrthopedicDoctorCard />
            <HeroScrollDemo />
            <MacbookScrollDemo />
            <AfyaMedGlobe />
        </>
    )
}