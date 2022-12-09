import { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { SidebarMenuContent } from './SidebarMenuContent';
import { SidebarContext } from '../../contexts/SidebarSettings';

export const SidebarMobile = (): JSX.Element => {
    const { isSidebarOpen, sidebarToggle, sidebarClose } = useContext(SidebarContext);
    return (
        <>
            <Menu as='div' className='relative hidden sm:block'>
                {/**<div>
                    <Menu.Button className='relative align-middle rounded-md hidden sm:block focus:outline-none focus:shadow-outline-purple'>
                        <span className='sr-only'>Open notifications menu</span>
                        <BellIcon className='w-5 h-5 text-white' aria-hidden='true' />
                        <span
                            aria-hidden='true'
                            className='absolute animation-ping top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-pink-500 border-2 border-indigo-600 rounded-full'></span>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <SidebarMenuContent />
                    </Menu.Items>
                </Transition> */}
            </Menu>
        </>
    );
};
