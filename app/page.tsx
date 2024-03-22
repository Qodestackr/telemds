import React from 'react'
import { HeroScrollDemo } from './ui-components/HeroScrollDemo'
import { AfyaMedGlobe } from '@/components/AfyaMedGlobe'
import { MacbookScrollDemo } from './ui-components/AfyaMedMacScrollDemo'

export default function page() {
    return (
        <>
            <HeroScrollDemo />
            <MacbookScrollDemo />
            <AfyaMedGlobe />
        </>
    )
}
