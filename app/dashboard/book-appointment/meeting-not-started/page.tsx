import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, X } from 'lucide-react'
import React from 'react'

export default function page() {
    function dayjs(startTime: any) {
        throw new Error('Function not implemented.')
    }

    return (
        <main className="max-w-3xl mx-auto my-24">
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 my-4 transition-opacity sm:my-0" aria-hidden="true">
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <div
                            className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline">
                            <div>
                                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
                                    <X className="w-6 h-6 text-red-600" />
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
                                        This meeting has not started yet
                                    </h3>
                                </div>
                                <div className="py-4 mt-4 border-t border-b">
                                    <h2 className="mb-2 text-lg font-medium text-center text-gray-600 font-cal">
                                        {"props.booking.title}"}
                                    </h2>
                                    <p className="text-center text-gray-500">
                                        {/* {dayjs(props.booking.startTime).format(
                                            (is24h ? "H:mm" : "h:mma") + ", dddd DD MMMM YYYY"
                                        )} */}

                                        <Calendar className="inline-block w-4 h-4 mr-1 -mt-1" />
                                    </p>
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <p className="text-sm text-gray-500">
                                        This meeting will be accessible 60 minutes in advance.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 text-center sm:mt-6">
                                <div className="mt-5">
                                    <Button>
                                        Go back home <ArrowRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
