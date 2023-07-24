import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import NavBarFunc from "./components/NavbarComponent";
import Footer from "./components/footerComponent";
import React, { useEffect } from "react";
import Daypack from "./pages/Daypack";
import CasualBag from "./pages/CasualBag";
import FannyPack from "./pages/FannyPack";
import GymBag from "./pages/GymBag";
import OrangeBag from "./pages/3ZipperOrangeBag";
import ThreeZipperBag from "./pages/3ZipperBags";
import GreenBag from "./pages/3ZipperGreenBag";
import BlackBag from "./pages/2ZipperBlackBag";
import TwoZipperBag from "./pages/2ZipperBags";
import AboutUs from "./pages/AboutUs";
import AllBags from "./pages/AllBags";
import AllKits from "./pages/AllKits";
import BlackBagThreeZipper from "./pages/3ZipperBlackBag";
import GreyBag from "./pages/3ZipperGreyBag";
import BlackOrangeBag from "./pages/3ZipperBlackOrangeBag";

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
          <Route path="/daypack" element={<Daypack />}></Route>
          <Route path="/casualbag" element={<CasualBag />}></Route>
          <Route path="/fannypack" element={<FannyPack />}></Route>
          <Route path="/gymbag" element={<GymBag />}></Route>
          <Route path="/3zipperbag" element={<ThreeZipperBag />}></Route>
          <Route path="/orangebag" element={<OrangeBag />}></Route>
          <Route path="/greenbag" element={<GreenBag />}></Route>
          <Route path="/blackbag" element={<BlackBag />}></Route>
          <Route path="/2zipperbag" element={<TwoZipperBag />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/allbags" element={<AllBags />}></Route>
          <Route path="/allkits" element={<AllKits />}></Route>
          <Route path="/blackbag3zipper" element={<BlackBagThreeZipper />}></Route>
          <Route path="/greybag" element={<GreyBag />}></Route>
          <Route path="/blackorangebag" element={<BlackOrangeBag />}></Route>          

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
