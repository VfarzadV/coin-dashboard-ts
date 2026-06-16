import { useRoutes } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="app-root">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="md:ml-[280px] ml-0 app-container">
        <Header onToggleSidebar={() => setSidebarOpen((s) => !s)} />
        <main className="pt-7">{router}</main>
      </div>
    </div>
  );
}

export default App;
