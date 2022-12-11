import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/';

const sidebarMenu = [
    {
        href: '/dashboard',
        name: 'Dashboard',
    },
    {
        href: '/error',
        name: 'Error',
    },
    {
        href: '/cta',
        name: 'CTA Samples',
    },
    {
        href: '/banner',
        name: 'Header Banner',
    },
    {
        href: '/layout',
        name: 'Layout',
    },
    {
        href: '/navbars',
        name: 'Navbars',
    },
];

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
                <Dialog as='div' className='relative z-40' onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter='transition-opacity ease-linear duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity ease-linear duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 z-40 flex'>
                        <Transition.Child
                            as={Fragment}
                            enter='transition ease-in-out duration-300 transform'
                            enterFrom='-translate-x-full'
                            enterTo='translate-x-0'
                            leave='transition ease-in-out duration-300 transform'
                            leaveFrom='translate-x-0'
                            leaveTo='-translate-x-full'>
                            <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                                <div className='px-4 sm:px-6 py-6'>
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
                                    <ul>
                                        {sidebarMenu.map(menu => (
                                            <li className='items-center'>
                                                <Link to={menu.href}>
                                                    <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                                        <span>{menu.name}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* /End replace */}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};
