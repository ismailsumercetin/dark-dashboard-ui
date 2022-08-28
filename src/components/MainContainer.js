import Sidebar from "./Sidebar";
import DashboardSection from "./DashboardSection";
import MenuSection from "./MenuSection";

function App() {
  return (
    <div className="main-container grid">
      <Sidebar />
      <MenuSection />
      <DashboardSection />
    </div>
  );
}

export default App;
