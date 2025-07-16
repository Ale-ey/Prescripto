import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Docters } from "./pages/Docters";
import { Appointment } from "./pages/Appointment";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MyAppointments } from "./pages/MyAppointments";
import { MyProfile } from "./pages/MyProfile";
import { Footer } from "./components/Footer";
export const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/docters" element={<Docters />}></Route>
        <Route path="/docters/:speciality" element={<Docters />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/my-profile" element={<MyProfile />}></Route>
        <Route path="/my-appoitments" element={<MyAppointments />}></Route>
        <Route path="/appointment/:docId" element={<Appointment />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};
