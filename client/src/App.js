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
<<<<<<< HEAD
        <Route path="/*" element={<CustomersRoute />} />{" "}
        <Route path="/admin/*" element={<AdminRouters />} />{" "}
        <Route path="/myprofile/*" element={<MyprofileRouters />} />
      </Routes>{" "}
=======
        <Route path="/*" element={<CustomersRoute />} />
        <Route path="/admin/*" element={<AdminRouters />} />
        <Route path= "/myprofile/*" element={<MyprofileRouters/>}  />
      </Routes>
>>>>>>> 9a91febc2b63b1ca810ab34af7bda8b8eac19e0a
    </div>
  );
}

export default App;
