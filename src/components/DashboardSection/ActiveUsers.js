const BAR_VALUES = ['0', '200', '400', '600'];

export default function ActiveUsers() {
    return (
        <div className="active-users flex flex-col">
            <h2>Active Users Right Now</h2>
            <div className="active-user-chart flex flex-row">
                { renderBarValues() }
                <div className="active-user-bar-container flex flex-row">
                    { [1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="active-user-bar" /> ) }
                </div>
                <div className="line"></div>
                <button className="close-btn">X</button>
            </div>
        </div>
    );
};

function renderBarValues() {
    return (
        <div className="vertical-num-active-users-container flex flex-col">
            {BAR_VALUES.map((item, i) => <span className="vertical-num-active-users" key={i}>{`${item}`}</span>)}
        </div>
    );
};