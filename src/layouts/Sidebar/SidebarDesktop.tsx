import { useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarSettings';
import { SidebarMenuContent } from './SidebarMenuContent';

// className = {`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}

export const SidebarDesktop = (): JSX.Element => {
    const { isSidebarOpen } = useContext(SidebarContext);
    return (
        <aside
            className={`z-30 flex-shrink-0 w-64 overflow-y-auto bg-white shadow-lg ${
                isSidebarOpen ? 'md:block' : 'hidden'
            }`}>
            <SidebarMenuContent />
        </aside>
    );
};
