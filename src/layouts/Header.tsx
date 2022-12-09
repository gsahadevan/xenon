import React from 'react';
import { Messages } from '../components/Messages';
import { Notifications } from '../components/Notifications';
import { Profile } from '../components/Profile';

export const Header = (): JSX.Element => {
    return (
        <header className='z-40 py-4 shadow-lg'>
            <div className='container flex items-center lg:justify-end justify-between h-full md:px-12 px-4 mx-auto'>
                <button
                    className='p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline'
                    aria-label='Menu'>
                    Example
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
