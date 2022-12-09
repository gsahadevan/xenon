import React from 'react';

function Header() {
    return (
        <header className='z-40 py-4 bg-white shadow-bottom dark:bg-gray-800'>
            <div className='container flex items-center lg:justify-end justify-between h-full md:px-12 px-4 mx-auto text-purple-600 dark:text-purple-300'>
                <button
                    className='p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple'
                    aria-label='Menu'></button>
            </div>
        </header>
    );
}

export default Header;
