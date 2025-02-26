import React from "react";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Welcome to LocalShop</h1>
      <p className="text-center">Manage your inventory efficiently with real-time reports.</p>
      
      <div className="d-flex gap-3">
        <Link to="login" className="btn btn-primary">Login</Link>
        <Link to="register" className="btn btn-secondary">Register</Link>
      </div>

      {/* This Outlet will render Login or Register inside Home when navigated */}
      <div className="mt-4 w-100 d-flex justify-content-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
