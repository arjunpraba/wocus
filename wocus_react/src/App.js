import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import HeaderFooter from "./HeaderFooter";
import Footer from "./Footer"
import Home from "./pages/Home";
import Layout from "./Layouts/Layout";
import Layout1 from "./Layouts/Layout1";
import WorkerRegister from "./pages/WorkerRegister";
import WorkerLogin from "./pages/WorkerLogin";
import CustomerDashboard from "./pages/HomePage";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import WorkerDashboard from "./components/WorkerDashboard";
import CreateJob from "./components/JobForm";
import AC from "./domain/ACRepairJobs";
import Art from "./domain/ArtworkJobs";
import Car from "./domain/CarpentryWorkJobs";
import Con from "./domain/ConstructionJobs";
import Electric from "./domain/ElectricalJobs";
import Plumbing from "./domain/PlumbingJobs";
import Electronic from "./domain/ElectronicsRepairJobs";
import Mech from "./domain/MechanicJobs";
import Soft from "./domain/SoftwareWorkJobs";
import SearchbyEmail from "./components/JobListByEmail";

function App() {
  return (
    <BrowserRouter>
      <HeaderFooter /> {/* Header and Footer are included globally */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/ac" element={<AC />} />
          <Route path="/art" element={<Art />} />
          <Route path="/car" element={<Car />} />
          <Route path="/con" element={<Con />} />
          <Route path="/soft" element={<Soft />} />
          <Route path="/mech" element={<Mech />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/electric" element={<Electric />} />
          <Route path="/layout1" element={<Layout1 />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/customerdashboard" element={<CustomerDashboard />} />
          <Route path="/search-jobs-by-email" element={<SearchbyEmail />} />
          <Route path="/workerdashboard" element={<WorkerDashboard />} />
          <Route path="/workerregister" element={<WorkerRegister />} />
          <Route path="/workerlogin" element={<WorkerLogin />} />
          <Route path="/customerlogin" element={<CustomerLogin />} />
          <Route path="/customerregister" element={<CustomerRegister />} />
        </Routes>
      </main>
      <Footer /> {/* Footer will appear at the bottom of all pages */}
    </BrowserRouter>
  );
}

export default App;
