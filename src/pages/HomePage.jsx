import React, { useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import MainComponent from "../components/MainComponent";
import HeaderComponent from "../components/HeaderComponent";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar el sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alterna entre abierto y cerrado
  };

  return (
    <div className="HomePage">
      <HeaderComponent toggleSidebar={toggleSidebar} />
      <SidebarComponent isSidebarOpen={isSidebarOpen} />
      <MainComponent />
    </div>
  );
}

export default HomePage;