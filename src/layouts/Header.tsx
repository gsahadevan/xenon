import React, { useContext, useEffect } from 'react';
import { Messages } from '../components/Messages';
import { Notifications } from '../components/Notifications';
import { Profile } from '../components/Profile';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { SidebarContext } from '../contexts/SidebarSettings';

export const Header = (): JSX.Element => {
    const { isSidebarOpen, sidebarToggle } = useContext(SidebarContext);
    return (
        <header className='py-4 shadow-lg bg-indigo-600'>
            <div
                className={`container flex items-center h-full md:px-12 px-4 mx-auto ${
                    isSidebarOpen ? 'justify-end' : 'justify-between'
                }`}>
                <button
                    className={`p-1 mr-5 -ml-1 rounded-md focus:outline-none focus:shadow-outline text-white-900 ${
                        isSidebarOpen ? 'hidden' : 'block'
                    }`}
                    aria-label='Menu'
                    onClick={sidebarToggle}>
                    <Bars3Icon className='w-5 h-5 text-white' aria-hidden='true' />
                </button>

                <div className='flex items-center space-x-4'>
                    <Messages />
                    <Notifications />
                    <Profile />
                </div>
            </div>
        </header>
    );
};
