import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ClerkDashboard from "./pages/ClerkDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import MerchantDashboard from "./pages/MerchantDashboard";
import Reports from "./pages/Reports";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Sidebar />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
              <Route path="/profile" element={<Profile />} />
              <Route path="/clerk-dashboard" element={<ClerkDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/merchant-dashboard" element={<MerchantDashboard />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
