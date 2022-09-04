import BrandImage from "./BrandImage";
import MenuItemContainer from "./MenuItemContainer";

export default function MenuSection() {
    return (
        <section className="menu-section flex flex-col">
            <MenuItemContainer title={'General'}/>
            <MenuItemContainer title={'Account'}/>
            <BrandImage />
        </section>
    );
};
