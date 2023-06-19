import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import Backpack from "./pages/Backpacks";
import NavBarFunc from "./components/NavbarComponent";
import Footer from "./components/footerComponent";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Yutk";
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBarFunc />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/backpack" element={<Backpack />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
