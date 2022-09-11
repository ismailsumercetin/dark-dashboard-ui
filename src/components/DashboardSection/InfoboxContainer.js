export default function InfoboxContainer() {
    return (
        <>
            <TotalBalance />
            <UpcomingPayments />
            <FinishedAppt />
        </>
    );
};

function TotalBalance() {
    return (
        <div className="infobox-item total-balance flex flex-col">
            <div className="infobox-info-container flex flex-col">
                <h2>Total Balance</h2>
                <div className="flex flex-row">
                    <span className="dollar">$</span>
                    <span className="amount">27,580</span>
                    <span className="dec">.55</span>
                </div>
            </div>
            <div className="total-balance-button-container flex flex-row">
                <button>Transfer</button>
                <button>Request</button>
            </div>
        </div>
    );
};


function UpcomingPayments() {
    return (
        <div className="infobox-item upcoming-payments flex flex-col">
            <div className="infobox-info-container flex flex-col">
                <h2>Upcoming Payments</h2>
                <span className="infobox-val">120</span>
            </div>
            <p className="infobox-sub-text">4 not confirmed*</p>
        </div>
    );
};


function FinishedAppt() {
    return (
        <div className="infobox-item finished-appt flex flex-col">
            <div className="infobox-info-container flex flex-col">
                <h2>Finished Appt</h2>
                <span className="infobox-val">72</span>
            </div>
            <p className="infobox-sub-text">3.4% growth vs last month*</p>
        </div>
    );
};
