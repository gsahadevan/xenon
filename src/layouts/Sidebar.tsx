import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = (): JSX.Element => {
    return (
        <aside className='z-30 flex-shrink-0 hidden w-64 overflow-y-auto lg:block shadow-lg'>
            <div className='py-4'>
                <a className='ml-6 text-lg font-bold' href='/dashboard'>
                    Xenon
                </a>
                <ul className='mt-6'>
                    <li className='px-2 py-1 items-center'>
                        <Link to='/dashboard'>
                            <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                <span>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className='px-2 py-1 items-center'>
                        <Link to='/error'>
                            <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                <span>Error</span>
                            </div>
                        </Link>
                    </li>
                    <li className='px-2 py-1 items-center'>
                        <Link to='/cta'>
                            <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                <span>CTA Samples</span>
                            </div>
                        </Link>
                    </li>
                    <li className='px-2 py-1 items-center'>
                        <Link to='/banner'>
                            <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                <span>Header Banner</span>
                            </div>
                        </Link>
                    </li>
                    <li className='px-2 py-1 items-center'>
                        <Link to='/layout'>
                            <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                <span>Layout</span>
                            </div>
                        </Link>
                    </li>
                    <li className='px-2 py-1 items-center'>
                        <Link to='/navbars'>
                            <div className='text-sm px-4 py-2 flex items-center hover:bg-gray-100 rounded'>
                                <span>Navbars</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
