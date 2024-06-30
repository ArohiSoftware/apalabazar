import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomersRoute from './Routers/CustomersRoute';

import AdminRouters from './Routers/AdminRouters';


import { useEffect } from 'react';
import MyprofileRouters from './Routers/MyprofileRouters';



// import Routers from './Routers/Routers';

function App() {
  const isAdmin=true;


  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomersRoute />} />
        <Route path="/admin/*" element={<AdminRouters />} />
        <Route path= "/myprofile/*" element={<MyprofileRouters/>}  />
      </Routes>
    </div>
  );
}

export default App;
