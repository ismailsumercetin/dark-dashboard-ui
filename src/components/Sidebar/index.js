import WindowButtonContainer from "./WindowButtonContainer";
import ProfileIcon from "./ProfileIcon";
import SidebarItemContainer from "./SidebarItemContainer";
import PowerButton from "./PowerButton";

export default function Sidebar() {
    return (
        <aside className="sidebar flex flex-col">
            <section className="sidebar-top flex flex-col">
                <WindowButtonContainer />
                <ProfileIcon />
                <SidebarItemContainer />
            </section>
            <PowerButton />
        </aside>
    );
};
