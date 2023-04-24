import React from 'react'
import { useSelector } from 'react-redux'
import { localUserServ } from '../../service/localService';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react'
import classNames from 'classnames';

export default function Usermenu() {


    let renderContent = () => {
        if (userInfo) {
            return (
                <>

                    <span>{userInfo.hoTen}</span>

                    <button
                        onClick={handleLogout}
                        className="px-5 py-2 rounded border-black border-2"
                    >
                        Đăng xuất
                    </button>
                </>
            );
        }

        else {
            return (
                <>
                    <NavLink className="text-sm font-semibold leading-6 text-gray-900" to={"/login"}>

                        Đăng nhập <span aria-hidden="true">&rarr;</span>

                    </NavLink>



                </>
            )
        }
    }
    return (
        <div className='space-x-5'>{renderContent()}</div>
    )
}
