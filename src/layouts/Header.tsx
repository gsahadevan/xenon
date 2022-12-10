import { Messages, Notifications, Profile } from '../components';
import { Sidebar } from './Sidebar';

export const Header = (): JSX.Element => {
    return (
        <header className='py-4 shadow-lg bg-indigo-600'>
            <div className='container flex justify-between items-center h-full md:px-12 px-4 mx-auto'>
                <div className='flex'>
                    <Sidebar />
                </div>

                <div className='flex items-center space-x-4'>
                    <Messages />
                    <Notifications />
                    <Profile />
                </div>
            </div>
        </header>
    );
};
