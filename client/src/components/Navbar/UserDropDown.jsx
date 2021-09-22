import { Menu } from '@headlessui/react'

import { FaUserAlt } from "react-icons/fa"

export default function UserDropDown() {
    return (
        <Menu>
            <Menu.Button>
                <span className="border border-gray-600 text-req-400 rounded-full cursor-pointer  flex items-center justify-center p-2 ">
                    <FaUserAlt />
                </span>
            </Menu.Button>
            <Menu.Items className="w-full   flex flex-col ">
                <Menu.Item>
                        <button>
                            Sign In
                        </button>
                </Menu.Item>
                <Menu.Item>
                        <button>
                            Sign Up
                        </button>
                </Menu.Item>
                
               
            </Menu.Items>
        </Menu>
    )
}