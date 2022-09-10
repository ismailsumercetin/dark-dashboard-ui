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
        <div className="infobox-item total-balance flex flex-col"></div>
    );
};


function UpcomingPayments() {
    return (
        <div className="infobox-item upcoming-payments flex flex-col"></div>
    );
};


function FinishedAppt() {
    return (
        <div className="infobox-item finished-appt flex flex-col"></div>
    );
};
