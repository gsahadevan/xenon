import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const DefaultLayout = (): JSX.Element => {
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className='flex flex-col flex-1 w-full'>
                <Header />
                <main className='h-full pt-8 pb-16 overflow-y-auto'>
                    <div className='container grid md:px-12 px-4 mx-auto'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};
