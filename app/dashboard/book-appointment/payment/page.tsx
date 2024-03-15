import AppointmentPaymentMethod from '@/components/payment/payment-method'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

export default function page() {
    return (
        <ScrollArea className='h-full container mx-auto'>
            <AppointmentPaymentMethod />
        </ScrollArea>
    )
}
