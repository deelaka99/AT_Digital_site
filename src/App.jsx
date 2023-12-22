import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/Contactus";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen w-full bg-secondary">
      <Navbar />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
