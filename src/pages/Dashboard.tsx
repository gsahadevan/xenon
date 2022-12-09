export const Dashboard = (): JSX.Element => {
    return (
        <>
            <div className='grid gap-4 md:mb-12 mb-4 lg:grid-cols-4 md:grid-cols-2'>
                {/* <!-- Card --> */}
                <div className='flex items-center p-4 bg-white rounded shadow-xs dark:bg-gray-800'>
                    <div>
                        <p className='text-sm font-medium text-gray-600 dark:text-gray-400'>Users</p>
                        <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>515</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className='flex items-center p-4 bg-white rounded shadow-xs dark:bg-gray-800'>
                    <div>
                        <p className='text-sm font-medium text-gray-600 dark:text-gray-400'>Revenue</p>
                        <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>€ 454.867,00</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className='flex items-center p-4 bg-white rounded shadow-xs dark:bg-gray-800'>
                    <div>
                        <p className='text-sm font-medium text-gray-600 dark:text-gray-400'>Sales</p>
                        <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>654</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className='flex items-center p-4 bg-white rounded shadow-xs dark:bg-gray-800'>
                    <div>
                        <p className='text-sm font-medium text-gray-600 dark:text-gray-400'>Leads</p>
                        <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>19</p>
                    </div>
                </div>
            </div>

            <div className='grid gap-4 mb-8 md:grid-cols-2'>
                <div className='bg-white p-4 rounded shadow-xs dark:bg-gray-800 dark:text-gray-300'>
                    <p className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>MQL Distribution</p>
                    <div className='relative w-full'></div>
                </div>
                <div className='bg-white p-4 rounded shadow-xs dark:bg-gray-800 dark:text-gray-300'>
                    <p className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Sales Distribution</p>
                    <div className='relative w-full'></div>
                </div>
            </div>

            <div className='min-w-0 w-full overflow-hidden p-4 rounded shadow-xs bg-white dark:bg-gray-800'>
                <p className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Sales Distribution</p>
                <div className='relative w-full overflow-x-auto'></div>
            </div>
        </>
    );
};
