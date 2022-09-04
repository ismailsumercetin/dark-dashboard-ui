const MENU_ITEMS_GENERAL = [
    [
        {
            itemTitle: 'Dashboard',
            className: 'icon-dashboard',
            selected: true
        },
        {
            itemTitle: 'Calculator',
            className: 'icon-calculator'
        }
    ],
    [
        {
            itemTitle: 'Wallets',
            className: 'icon-wallets'
        },
        {
            itemTitle: 'Savings',
            className: 'icon-savings'
        }
    ],
    [
        {
            itemTitle: 'Currencies',
            className: 'icon-currencies'
        },
        {
            itemTitle: 'Expenses',
            className: 'icon-expenses'
        }
    ],
];

const MENU_ITEMS_ACCOUNT = [
    [
        {
            itemTitle: 'Upcoming',
            className: 'icon-upcoming'
        },
        {
            itemTitle: 'Food',
            className: 'icon-food'
        }
    ],
    [
        {
            itemTitle: 'Health',
            className: 'icon-health'
        },
        {
            itemTitle: 'Account',
            className: 'icon-account'
        }
    ],
];

export default function MenuItemContainer({ title }) {
    const menuItems = title === 'General' ? MENU_ITEMS_GENERAL : MENU_ITEMS_ACCOUNT;

    return (
        <>
            <section className="menu-item-section flex flex-col">
                <h2 className="menu-item-section-title">
                    {title}
                </h2>
                {
                    menuItems.map((row, i) => {
                        return (
                            <div key={i} className="menu-item-row flex flex-row">
                                {row.map((item, i) => (
                                    <MenuItem
                                        key={i}
                                        { ...item }
                                    />
                                ))}
                            </div>
                        );
                    })
                }
            </section>
        </>
    );
};

const MenuItem = ({ itemTitle, selected, className }) => {
    return (
        <div className="menu-item-wrapper flex flex-col">
            <button
                className={`menu-item${selected ? ' selected' : ''} ${className}`}
            />
            <p className="menu-item-title">{itemTitle}</p>
        </div>
    );
};
