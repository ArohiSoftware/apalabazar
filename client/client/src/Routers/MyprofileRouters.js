import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Myprofile from '../Profile/Myprofile'
function MyprofileRouters() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Myprofile/>}/>

      </Routes>
    </div>
  )
}

export default MyprofileRouters
