import DashboardHeader from "./DashboardHeader";
import MonthlySales from "./MonthlySales";
import ActiveUsers from "./ActiveUsers";
import TransactionHistory from "./TransactionHistory";
import RevenueStats from "./RevenueStats";
import InfoboxContainer from "./InfoboxContainer";

export default function DashboardSection() {
    return (
        <section className="dashboard-section">
            <DashboardHeader />
            <div className="dashboard-main grid">
                <MonthlySales />
                <ActiveUsers />
                <InfoboxContainer />
                <TransactionHistory />
                <RevenueStats />
            </div>
        </section>
    );
};
