import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import avatar from '../assets/images/profile.jpg';

export const Profile = (): JSX.Element => {
    return (
        <>
            <Menu as='div' className='relative'>
                <div>
                    <Menu.Button className='flex text-sm rounded-full focus:outline-none'>
                        <span className='sr-only'>Open user menu</span>
                        <img className='h-8 w-8 rounded-full' src={avatar} alt='User Avatar' />
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
                        <Menu.Item>
                            <a href='/dashboard' className='block px-2 py-1 text-sm'>
                                <Link to='/error'>
                                    <div className='text-sm px-2 py-1 flex items-center hover:bg-gray-100 rounded'>
                                        <span>Profile</span>
                                    </div>
                                </Link>
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href='/dashboard' className='block px-2 py-1 text-sm'>
                                <Link to='/error'>
                                    <div className='text-sm px-2 py-1 flex items-center hover:bg-gray-100 rounded'>
                                        <span>Settings</span>
                                    </div>
                                </Link>
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href='/error' className='block px-2 py-1 text-sm'>
                                <Link to='/error'>
                                    <div className='text-sm px-2 py-1 flex items-center hover:bg-gray-100 rounded'>
                                        <span>Sign out</span>
                                    </div>
                                </Link>
                            </a>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};
