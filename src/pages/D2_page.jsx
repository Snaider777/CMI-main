import React, { useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import MainComponent from "../components/MainComponent";
import HeaderComponent from "../components/HeaderComponent";

function Dimencion2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar el sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alterna entre abierto y cerrado
  };

  return (
    <div className="Dimencion2">
      <HeaderComponent toggleSidebar={toggleSidebar} />
      <SidebarComponent isSidebarOpen={isSidebarOpen} />
      <main>DIMENCION 2</main>
    </div>
  );
}

export default Dimencion2;