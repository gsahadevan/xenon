import React, { useContext, useEffect, useState } from 'react';
import { Messages } from '../components/Messages';
import { Notifications } from '../components/Notifications';
import { Profile } from '../components/Profile';
import { Bars3Icon } from '@heroicons/react/24/outline';

export const Header = (): JSX.Element => {
    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        console.log(sidebar);
    }, [sidebar]);

    return (
        <header className='py-4 shadow-lg bg-indigo-600'>
            <div className='container flex items-center lg:justify-end justify-between h-full md:px-12 px-4 mx-auto'>
                <button
                    className='p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline text-white-900'
                    aria-label='Menu'
                    onClick={() => setSidebar(!sidebar)}>
                    <Bars3Icon className='w-6 h-6 text-white' aria-hidden='true' />
                </button>

                <div className='flex items-center pr-2 space-x-4'>
                    <Messages />
                    <Notifications />
                    <Profile />
                </div>
            </div>
        </header>
    );
};
