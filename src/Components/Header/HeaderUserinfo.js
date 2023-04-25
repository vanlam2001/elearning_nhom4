import React from 'react'

import { localUserServ } from '../../services/localService';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function HeaderUserinfo() {
    let { userInfo } = useSelector(state => state.userSlice);
    let handleLogout = () => {
        localUserServ.remove();
        window.location.href = '/';
    }

    if (userInfo) {
        return (
            <div className='flex items-center sm:mt-5 lg:mt-0'>
                <NavLink style={{ textDecoration: 'none' }}>
                    <span className=' text-gray-500 border-r-2 pr-3 '>
                        {userInfo.hoTen}
                    </span>
                </NavLink>
                <NavLink onClick={handleLogout} style={{ textDecoration: 'none' }}>
                    <span className='flex items-center text-gray-500 ml-3  '>
                        <i class="fas fa-sign-out-alt fa-lg fa-fw"></i>
                        <small className='text-sm ml-2'>Đăng xuất</small>
                    </span>
                </NavLink>

            </div>
        )
    }
    else {
        return (
            <div className='flex items-center sm:mt-5 lg:mt-0'>
                <NavLink style={{ textDecoration: 'none' }} to='/login'>
                    <span className='flex items-center text-gray-500 border-r-2 pr-3 '>
                        <i className="fa fa-user-circle text-3xl" aria-hidden="true"></i>
                        <small className='text-sm ml-2'>Đăng nhập</small>
                    </span>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to='/register'>
                    <span className='flex items-center text-gray-500 ml-3  '>
                        <i className="fa fa-user-circle text-3xl" aria-hidden="true"></i>
                        <small className='text-sm ml-2'>Đăng ký</small>
                    </span>
                </NavLink>
            </div>
        )
    }
}

export default HeaderUserinfo
