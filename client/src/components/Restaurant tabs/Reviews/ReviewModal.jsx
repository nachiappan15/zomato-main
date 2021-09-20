import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DeliveryRatings from '../Overview/DeliveryRating'


export default function ReviewModal({ isOpen, setIsOpen, ...props }) {


    function closeModal() {
        setIsOpen(false)
    }



    return (
        <>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 border-b-2 py-2"
                                >
                                    Add Review
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div className="flex flex-col gap-4 mt-3">

                                        <div className="flex flex-col gap-1 ">
                                            <h1 className="text-2xl font-medium ">Rate your Experience for</h1>

                                            <div className="flex gap-5">
                                                <div className="flex gap-2 items-center text-lg">
                                                    <input type="radio" name="rating" id="delivery" />
                                                    <label htmlFor="delivery">Delivery</label>
                                                </div>
                                                <div className="flex gap-2 items-center text-lg">
                                                    <input type="radio" name="rating" id="dining" />
                                                    <label htmlFor="dining">Dining</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <DeliveryRatings />
                                    </div>
                                    <form className="mt-1 flex flex-col gap-3">
                                        <div className="flex flex-col gap-1">
                                        <label htmlFor="subject" className="text-lg font-medium">Review:</label>
                                        <input type="text" id ="subject" placeholder="the Subject of the review" className="border-2 outline-none px-2 py-1 w-full rounded-lg " />
                                        </div>

                                        <div>
                                        <label htmlFor=""></label>
                                        <textarea type="text" id ="reviewText" placeholder="Write your review" className="border-2 outline-none h-24 w-full  px-2 py-1 rounded-lg" />   
                                        </div>
                                    </form>

                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

