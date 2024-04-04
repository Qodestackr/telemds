import React from 'react'
import { HeroScrollDemo } from './ui-components/HeroScrollDemo'
import { AfyaMedGlobe } from '@/components/AfyaMedGlobe'
import { MacbookScrollDemo } from './ui-components/AfyaMedMacScrollDemo'
import CardDoctorType from './doctor-type-card'

export default function page() {
    return (
        <>
            {/* <CardDoctorType /> */}
            <HeroScrollDemo />
            <MacbookScrollDemo />
            <AfyaMedGlobe />
        </>
    )
}