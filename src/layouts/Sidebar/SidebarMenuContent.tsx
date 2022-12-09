import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { SidebarContext } from '../../contexts/SidebarSettings';

export const SidebarMenuContent = (): JSX.Element => {
    const { isSidebarOpen, sidebarToggle, sidebarClose } = useContext(SidebarContext);
    return (
        <div>
            <div className='px-6 py-4 border-b flex justify-between content-center'>
                <span className='text-lg font-bold'>Xenon</span>
                <button
                    className='rounded-md focus:outline-none focus:shadow-outline'
                    aria-label='Menu'
                    onClick={sidebarToggle}>
                    <ChevronLeftIcon className='w-5 h-5' aria-hidden='true' />
                </button>
            </div>
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
    );
};
