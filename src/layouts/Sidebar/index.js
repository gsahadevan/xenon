import { SidebarDesktop } from './SidebarDesktop';
import { SidebarMobile } from './SidebarMobile';

// export const Sidebar = (): JSX.Element => {

function Sidebar() {
    return (
        <>
            <SidebarDesktop></SidebarDesktop>
            <SidebarMobile></SidebarMobile>
        </>
    );
}

export default Sidebar;
