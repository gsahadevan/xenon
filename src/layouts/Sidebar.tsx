import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline/';

export const Sidebar = (): JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className='relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple cursor-pointer'
                onClick={() => {
                    setOpen(open => !open);
                }}>
                <Bars3Icon className='w-5 h-5 text-white' />
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' className='fixed inset-0 overflow-hidden z-9999' onClose={() => setOpen(false)}>
                    <div className='absolute inset-0 overflow-hidden'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-in-out duration-500'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in-out duration-500'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'>
                            <Dialog.Overlay className='absolute inset-0 bg-opacity-75 transition-opacity' />
                        </Transition.Child>
                        <div className='fixed inset-0 left-0 pr-10 max-w-full flex'>
                            <Transition.Child
                                as={Fragment}
                                enter='transform transition ease-in-out duration-500 sm:duration-700'
                                enterFrom='-translate-x-full'
                                enterTo='translate-x-0'
                                leave='transform transition ease-in-out duration-500 sm:duration-700'
                                leaveFrom='translate-x-0'
                                leaveTo='-translate-x-full'>
                                <div className='relative w-screen max-w-md'>
                                    <div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll'>
                                        <div className='px-4 sm:px-6'>
                                            <div className='flex justify-between mb-4'>
                                                <Dialog.Title className='text-lg font-medium'>Xenon</Dialog.Title>
                                                <button
                                                    className='text-gray-900 focus:outline-none px-2 py-1'
                                                    onClick={() => {
                                                        setOpen(open => !open);
                                                    }}>
                                                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                                    <span className='sr-only'>Close panel</span>
                                                </button>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className='mt-6 relative flex-1 px-4 sm:px-6'>
                                            {/* Replace with your content */}
                                            <ul>
                                                <li className='items-center'>
                                                    <Link to='/dashboard'>
                                                        <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                                            <span>Dashboard</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='items-center'>
                                                    <Link to='/error'>
                                                        <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                                            <span>Error</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='items-center'>
                                                    <Link to='/cta'>
                                                        <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                                            <span>CTA Samples</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='items-center'>
                                                    <Link to='/banner'>
                                                        <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                                            <span>Header Banner</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='items-center'>
                                                    <Link to='/layout'>
                                                        <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                                            <span>Layout</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='items-center'>
                                                    <Link to='/navbars'>
                                                        <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                                            <span>Navbars</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                            {/* /End replace */}
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};
