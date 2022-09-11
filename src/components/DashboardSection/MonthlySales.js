const BAR_VALUES = [
    {
        height: '50px',
        month: 'Jan'
    },
    {
        height: '150px',
        month: 'Feb',
        even: true
    },
    {
        height: '70px',
        month: 'Mar'
    },
    {
        height: '115px',
        month: 'Apr',
        even: true
    },
    {
        height: '130px',
        month: 'May'
    },
    {
        height: '30px',
        month: 'Jun',
        even: true
    },
    {
        height: '165px',
        month: 'Jul'
    },
    {
        height: '25px',
        month: 'Aug',
        even: true
    },
    {
        height: '65px',
        month: 'Sep'
    }
];

const VERTICAL_VALUES = ['0', '4', '6', '10', '15'];

function renderVerticalNumbers() {
    return (
        <div className="vertical-num-container flex flex-col">
            {VERTICAL_VALUES.map((item, i) => <span className="vertical-num" key={i}>{`${item}k`}</span>)}
        </div>
    );
};

export default function MonthlySales() {
    return (
        <div className="monthly-sales flex flex-col">
            <h2>Monthly Sales</h2>
            <div className="bar-chart-wrapper flex flex-row">
                {renderVerticalNumbers()}
                {BAR_VALUES.map((item, i) => <Bar key={i} {...item} />)}
            </div>
        </div>
    );
};

function Bar({ height, month, even }) {
    return (
        <div className="flex flex-col">
            <div className="bar" style={{
                height,
                backgroundColor: even ? '#4f45bb' : '#83e9f5',
                boxShadow: '0px 6px 18px -2px rgba(79,69,187,0.74)'
                }} />
            <span className="month">{month}</span>
        </div>
    );
}