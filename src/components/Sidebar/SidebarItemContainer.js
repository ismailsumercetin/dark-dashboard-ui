export default function SidebarItemContainer() {
    return (
        <section className="sidebar-item-container flex flex-col">
            <SidebarItem letter={'S'} />
            <SidebarItem letter={'A'} />
            <SidebarItem />
            <SidebarItem />
        </section>
    );
};

function SidebarItem({ letter }) {
    return (
        <button className="sidebar-item">
            {letter && <strong>{ letter }</strong>}
        </button>
    );
};