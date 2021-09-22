import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FcGoogle } from "react-icons/fc"

export default function SignUp({ isOpen, setIsOpen, ...props }) {


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
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    SIGN UP
                                </Dialog.Title>
                                <div className="mt-2">
                                    <button className="py-2 px-2 flex items-center justify-center    rounded-lg text-center gap-2 w-full border  bg-white text-gray-700 hover:bg-gray-100">
                                        Sign Up with google <FcGoogle />
                                    </button>

                                    <form className="mt-1 flex flex-col gap-3">
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="username" className="text-lg font-medium">UserName</label>
                                            <input type="text" id="username" className="border-2 outline-none px-2 py-1 w-full rounded-lg " />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="email" className="text-lg font-medium">Email</label>
                                            <input type="email" id="email" className="border-2 outline-none px-2 py-1 w-full rounded-lg " />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="password" className="text-lg font-medium">Password</label>
                                            <input type="password" id="password" className="border-2 outline-none px-2 py-1 w-full rounded-lg " />
                                        </div>
                                        <div className="w-full bg-req-400 text-white py-2 text-center">
                                            Sign In
                                        </div>


                                    </form>
                                </div>


                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
/*



*/