import { useState } from "react";

import { MdOutlineSpaceDashboard, MdOutlineInventory, MdKeyboardArrowDown } from "react-icons/md";
import { BsCart, BsSearch, BsArrowLeftShort } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiMenu } from 'react-icons/hi'
import { FcShop } from "react-icons/fc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

const items = [
    {
        name: 'Cart',
        href: '#',
        icon: BsCart,
    },
    {
        name: 'Dashboard',
        href: '#',
        icon: MdOutlineSpaceDashboard,
    },
    {
        name: 'Inventory',
        href: '#',
        icon: MdOutlineInventory,
        list: [
            {
                name: 'Products',
                href: '#'
            },
            {
                name: 'Orders',
                href: '#'
            },
        ]
    }
]

function MenuItems() {
    return (
        items.map((item) => (
            'list' in item ?
                <li className="" key={item.name}>
                    <div className="relative flex justify-between text-gray-400 hover:text-white focus-within:text-white">
                        <div className="flex items-center w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                <item.icon />
                            </div>
                            <a href={item.href} className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                                {item.name}
                            </a>
                        </div>
                        <button className="absolute right-0 flex items-center p-1 py-2" tabIndex="-1">
                            <MdKeyboardArrowDown />
                        </button>
                    </div>
                    <div className="pt-2 pl-4">
                        <ul className="flex flex-col pl-2 text-gray-400 border-l border-gray-700">
                            {
                                item.list.map((el) => (
                                    <li key={el.name}>
                                        <a href={el.href} className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
                                            {el.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </li> :
                <li className="relative text-gray-400 hover:text-white focus-within:text-white" key={item.name}>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <item.icon />
                    </div>
                    <a href={item.href} className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                        {item.name}
                    </a>
                </li>
        ))
    )
}

function SideBar({ handleSidebar }) {
    return (
        <>
            <div className="flex absolute inset-y-0 left-0 min-h-screen">
                <div className="w-64 overflow-y-scroll bg-gray-900 pt-4">
                    <div className="px-6">
                        <div className="flex items-center justify-between">
                            <a href="#" className="flex items-center gap-3 text-gray-200 tracking-widest font-semibold text-3xl">
                                <FcShop className="w-10 h-10" />
                                POS
                            </a>
                            <button className="flex items-center justify-center md:hidden p-1 rounded text-gray-400 bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
                                onClick={handleSidebar}>
                                <BsArrowLeftShort />
                            </button>
                        </div>
                    </div>
                    <div className="px-6 pt-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-gray-500 font-light text-sm">
                                <BsSearch />
                            </div>
                            <input type="text" placeholder="search" className="w-full rounded pl-8 pr-4 py-2.5 text-xs font-light bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800" />
                        </div>
                    </div>
                    <div className="px-6 pt-4">
                        <hr className="border-gray-700" />
                    </div>
                    <div className="px-6 pt-4">
                        <ul className="flex flex-col space-y-2">
                            <MenuItems />
                        </ul>
                    </div>
                    <div className="px-6 pt-8">
                        <hr className="border-gray-700" />
                    </div>
                    <div className="px-6 pt-4 pb-8">
                        <ul>
                            <li className="relative text-gray-400 hover:text-white focus-within:text-white">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <FiSettings />
                                </div>
                                <a href="#" className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="pl-6 pr-4 py-4 bg-[#232529] flex items-center justify-between">
                    <div className="flex items-center">
                        <div
                            className="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white"
                        >
                            <img
                                className="rounded-full"
                                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col pl-3">
                            <div className="text-sm text-gray-50">Jane Doeson</div>
                            <span className="text-xs text-[#acacb0] font-light tracking-tight">
                                janedoeson@gmail.com
                            </span>
                        </div>
                    </div>
                    <button
                        className="text-gray-400 bg-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
                    >
                        <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M15.25 10.75L12 14.25L8.75 10.75"
                            ></path>
                        </svg>
                    </button>
                </div> */}
                </div>
            </div>
        </>
    )
}

export default function Layout({ children, pageHeading }) {
    const [sidebar, setSidebar] = useState(true)

    const handleSideBar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
            <aside className={`sidebar w-64 md:shadow transform transition-transform duration-150 ease-in ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <SideBar handleSidebar={handleSideBar} />
            </aside>
            <main className={`main flex flex-col flex-grow transition-all duration-150 ease-in ${sidebar ? '-ml-64 md:ml-0' : '-ml-64'}`}>
                <header className={`header py-3 px-4 ${!sidebar && 'shadow'}`}>
                    <div className="header-content flex items-center flex-row">
                        <a href="#" className={`flex items-center gap-3 p-1 mr-3 border border-dashed border-gray-400 rounded-xl ${sidebar && 'hidden'}`}>
                            <FcShop className="w-8 h-8" />
                        </a>
                        <HiMenu className='h-7 w-auto text-gray-500' role="button" onClick={handleSideBar} />
                        <h1 className="font-bold text-3xl text-gray-700 mx-3">{pageHeading}</h1>
                        <div className="flex ml-auto gap-4 items-center">
                            <IoMdNotifications className="w-6 h-6 text-gray-700" role="button" />
                            <MdOutlineArrowDropDown className="h-5 w-5 bg-gray-700 text-slate-200 rounded-full" role="button" />
                        </div>
                    </div>
                </header>
                <div className="main-content flex flex-col flex-grow px-4 mt-3">

                    {children}

                    {/* <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded"></div> */}
                </div>
                <footer className="footer px-4 py-6">
                    <div className="footer-content">
                        <p className="text-sm text-gray-600 text-center">© POS 2022. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    )
}