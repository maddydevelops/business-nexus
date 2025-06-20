import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/forgetpassword";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard";
import EntrepreneurDashboard from "./pages/dashboard/EntrepreneurDashboard";
import InvestorProfile from "./pages/profile/InvestorProfile";
import EntrepreneurProfile from "./pages/profile/EntrepreneurProfile";
import Navbar from "./components/Navbar";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16">
        <Routes>
          {/* Auth Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Dashboard & Profile Pages inside layout */}
          <Route
            path="/dashboard/investor"
            element={
              <DashboardLayout>
                <InvestorDashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/entrepreneur"
            element={
              <DashboardLayout>
                <EntrepreneurDashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/profile/investor/:id"
            element={
              <DashboardLayout>
                <InvestorProfile />
              </DashboardLayout>
            }
          />
          <Route
            path="/profile/entrepreneur/:id"
            element={
              <DashboardLayout>
                <EntrepreneurProfile />
              </DashboardLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
