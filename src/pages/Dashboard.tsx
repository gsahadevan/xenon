export const Dashboard = (): JSX.Element => {
    return (
        <>
            <div className='grid gap-4 md:mb-12 mb-4 lg:grid-cols-4 md:grid-cols-2'>
                {/* <!-- Card --> */}
                <div className='flex items-center p-4 bg-white rounded shawdow-lg'>
                    <div>
                        <p className='text-sm font-medium'>Users</p>
                        <p className='text-lg font-semibold'>515</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className='flex items-center p-4 bg-white rounded shawdow-lg'>
                    <div>
                        <p className='text-sm font-medium'>Revenue</p>
                        <p className='text-lg font-semibold'>€ 454.867,00</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className='flex items-center p-4 bg-white rounded shawdow-lg'>
                    <div>
                        <p className='text-sm font-medium'>Sales</p>
                        <p className='text-lg font-semibold'>654</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className='flex items-center p-4 bg-white rounded shawdow-lg'>
                    <div>
                        <p className='text-sm font-medium'>Leads</p>
                        <p className='text-lg font-semibold'>19</p>
                    </div>
                </div>
            </div>

            <div className='grid gap-4 mb-8 md:grid-cols-2'>
                <div className='bg-white p-4 rounded shawdow-lg'>
                    <p className='mb-4 font-semibold'>MQL Distribution</p>
                    <div className='relative w-full'></div>
                </div>
                <div className='bg-white p-4 rounded shawdow-lg'>
                    <p className='mb-4 font-semibold'>Sales Distribution</p>
                    <div className='relative w-full'></div>
                </div>
            </div>

            <div className='min-w-0 w-full overflow-hidden p-4 rounded shawdow-lg bg-white'>
                <p className='mb-4 font-semibold'>Sales Distribution</p>
                <div className='relative w-full overflow-x-auto'></div>
            </div>
        </>
    );
};
