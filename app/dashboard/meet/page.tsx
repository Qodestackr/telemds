'use client';
import React from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function page() {
    return (
        <ScrollArea className="h-full">
            <JitsiMeeting
                configOverwrite={{
                    startWithAudioMuted: false,
                    hiddenPremeetingButtons: ['microphone']
                }}
                roomName={'Consult with Dr. Eunice'}
                getIFrameRef={node => node.style.height = '800px'}
            />
        </ScrollArea >
    )
}
