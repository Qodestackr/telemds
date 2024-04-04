import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area";
import BreadCrumb from '@/components/breadcrumb';

const breadcrumbItems = [{ title: "Messages", link: "/dashboard/messages" }];

export default function Messages() {
  return (
    <ScrollArea className='h-full container'>
      <BreadCrumb items={breadcrumbItems} />

        No Messages Found.
        
    </ScrollArea>
  )
}
