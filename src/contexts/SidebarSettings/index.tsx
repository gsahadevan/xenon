import { createContext, useEffect, useMemo, useState } from 'react';

export const SidebarContext = createContext<any>(null);
export const SidebarSettingsProvider = ({ children }: any) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        console.log(isSidebarOpen);
    }, [isSidebarOpen]);

    const sidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);
    const sidebarClose = () => setIsSidebarOpen(false);

    const value = useMemo(
        () => ({
            isSidebarOpen,
            sidebarToggle,
            sidebarClose,
        }),
        [isSidebarOpen]
    );
    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
