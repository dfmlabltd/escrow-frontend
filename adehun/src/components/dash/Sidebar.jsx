import SidebarLogo from "../../widgets/Dashboard/Sidebar/SidebarLogo"
import SidebarLink from "../../widgets/Dashboard/Sidebar/Links";
import FootLinks from "../../widgets/Dashboard/Sidebar/FootLinks";

function Sidebar () {
    return (
        <>
            <SidebarLogo />
            <SidebarLink />
            <FootLinks />
        </>
    )
}

export default Sidebar;