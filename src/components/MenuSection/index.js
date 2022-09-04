import MenuItemContainer from "./MenuItemContainer";

export default function MenuSection() {
    return (
        <section className="menu-section">
            <MenuItemContainer title={'General'}/>
            <MenuItemContainer title={'Account'}/>
        </section>
    );
};
