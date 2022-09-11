export default function TransactionHistory() {
    return (
        <div className="infobox-item transaction-history flex flex-col">
            <h2>Transaction History</h2>
            <div>Mon, Mar 1</div>
            <div className="transaction-info-wrapper flex flex-row">
                <div className="flex flex-row">
                    <div className="arrow-icon"></div>
                    <div>Payment to Sümer</div>
                </div>
                <div className="transaction-amount">
                    $560.00
                </div>
            </div>
        </div>
    );
};
