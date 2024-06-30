import React from 'react';
import AdminPanel from "./../Admin/AdminPannel.js";

import { Routes, Route } from 'react-router-dom';


function AdminRouters() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<AdminPanel/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouters
