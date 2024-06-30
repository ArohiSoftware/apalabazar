// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomersRoute from "./Routers/CustomersRoute";
import AdminRouters from "./Routers/AdminRouters";
import MyprofileRouters from "./Routers/MyprofileRouters";

function App() {
  // Example: Determine if user is admin (you can use your own logic here)
  const isAdmin = true;

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomersRoute />} />{" "}
        <Route path="/admin/*" element={<AdminRouters />} />{" "}
        <Route path="/myprofile/*" element={<MyprofileRouters />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
