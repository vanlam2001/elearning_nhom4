import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Input } from 'antd';
import {
    FaDatabase,
    FaTabletAlt,
    FaCode,
    FaLaptopCode,
    FaUserNinja,
} from "react-icons/fa";
import {
    Bars3Icon,
    CursorArrowRaysIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";
import HeaderUserinfo from "./HeaderUserinfo";
import { NavLink } from "react-router-dom";
import { courseService } from "../../services/couserService";
import { useNavigate } from "react-router-dom";
import './header.css'
const { Search } = Input;
const products = [
    {
        name: "Lập trình BackEnd",
        description: "Bootcamp - Lập trình BackEnd từ Zero đến có việc",
        href: '#',
        icon: FaDatabase,
    },
    {
        name: "Thiết kế web",
        description: "Bootcamp - Từ Zero đến có việc",
        href: "#",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Lập trình di động ",
        description: "Bootcamp - Lập trình di động từ Zero đến có việc",
        href: "#",
        icon: FaTabletAlt,
    },
    {
        name: "Lập trình Front End",
        description: "Bootcamp - Lập trình Front End từ Zero đến có việc",
        href: '/frontend',
        icon: FaCode,
    },
    {
        name: "Lập trình Full Stack",
        description: "Bootcamp - Lập trình Full Stack từ Zero đến có việc",
        href: "#",
        icon: FaLaptopCode,
    },
    {
        name: "Tư duy lập trình",
        description: "Bootcamp - Tư duy lập trình từ Zero đến có việc",
        href: "#",
        icon: FaUserNinja,
    },
];

const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Header() {
    const navigate = useNavigate()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [listCategoryCourse, setListCategoryCourse] = useState([])
    useEffect(() => {
        courseService.getCourseMenu()
            .then((res) => {
                let listObj = []
                for (let i = 0; i < res.data.length; i++) {
                    let newObj = { ...res.data[i], ...products[i] }
                    listObj.push(newObj)
                }
                setListCategoryCourse(listObj);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const onSearch = (value) => {
        if (value) {
            navigate(`/search/${value}`)
        }
    };
    return (
        <div>
            <header className="bg-white z-50 fixed navbar inset-x-0 top-0 left-0">
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1 items-center">
                        <NavLink to={"/"} className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://demo2.cybersoft.edu.vn/logo.png"
                                alt=""
                            />
                        </NavLink>

                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                Danh Mục
                                <ChevronDownIcon
                                    className="h-5 w-5 flex-none text-gray-400"
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {listCategoryCourse.map((item) => (
                                            <NavLink key={item.name} to={`/categorycourse/${item.maDanhMuc}`}>
                                                <div
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                >
                                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon
                                                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <a
                                                            href={item.href}
                                                            className="block font-semibold text-gray-900"
                                                        >
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                        {callsToAction.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                            >
                                                <item.icon
                                                    className="h-5 w-5 flex-none text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <NavLink to={'/khoahoc'}
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Khoá học
                        </NavLink>
                        <NavLink to={'/blog'}
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Blog
                        </NavLink>

                        <NavLink to={'/info'}
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Thông Tin
                        </NavLink>
                    </Popover.Group>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <HeaderUserinfo></HeaderUserinfo>

                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Search
                            className="inputSearch ml-2"
                            placeholder="Tìm kiếm"
                            onSearch={onSearch}
                            style={{
                                maxWidth: 150,
                            }}
                        />
                    </div>






                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <NavLink to={"/login"} className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://demo2.cybersoft.edu.vn/logo.png"
                                    alt=""
                                />



                            </NavLink>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                    Danh Mục
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? "rotate-180" : "",
                                                            "h-5 w-5 flex-none"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...listCategoryCourse, ...callsToAction].map((item) => (
                                                        <NavLink to={`/categorycourse/${item.maDanhMuc}`} key={item.name}>
                                                            <Disclosure.Button
                                                                as="a"
                                                                href={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                            >
                                                                {item.name}
                                                            </Disclosure.Button>

                                                        </NavLink>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <a
                                        href="/khoahoc"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Khoá học
                                    </a>
                                    <a
                                        href="/blog"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="/info"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Thông Tin
                                    </a>
                                </div>
                                <div className="py-6">
                                    <HeaderUserinfo></HeaderUserinfo>
                                </div>
                                <div className="py-6">
                                    <Search
                                        className="inputSearch ml-2"
                                        placeholder="Tìm kiếm"
                                        onSearch={onSearch}
                                        style={{
                                            maxWidth: 150,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
}

export default Header;
