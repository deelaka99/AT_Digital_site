import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="h-screen w-full bg-secondary">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
