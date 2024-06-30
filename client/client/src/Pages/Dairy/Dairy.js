// import React, { useState } from 'react'
// import { Butter } from './Butter/Butter'
// import {Cheese} from './Cheese/Cheese'
// import { Dahi } from './Dahi/Dahi'
// import { DairyProducts } from './Dairy Products/DairyProducts'
// import { Milk } from './Milk/Milk'
// import { Yogurt } from './Yogurt/Yogurt'


// import SideBar from "../../customer/Components/Sidebar/Sidebar"
// import Navbar from '../../customer/Components/Navbar/Navbar'


// const sidebarDairy = ["Butter","Milk","Cheese","Dairy Products","Dhai","Yogurt"]
// function Dairy() {
//   const [activeTab,setActiveTab] = useState("All Dairy Products")
//   return (
//     <div>
//       <Navbar/>
//       <div className=' flex gap-6'>
        
//         <SideBar setActiveTab={setActiveTab}  title={"Dairy"}  sidebarDairy={sidebarDairy} key={'2'}/>
//         {activeTab==="All Dairy Products" ? <div className='flex flex-wrap  w-full'>
//           <Butter/>
//           <Cheese/>
//           <Dahi/>
//           <DairyProducts/>
//           <Milk/>
//           <Yogurt/>

//         </div>:""}
        
//         {activeTab==="Butter" ? <Butter />:""}
//         {activeTab==="Cheese" ? <Cheese />:""}
//         {activeTab==="Dahi" ? <Dahi/>:""}
//         {activeTab==="Dairy Products" ? <DairyProducts/>:""}
//         {activeTab==="Milk" ? <Milk/>:""}
//         {activeTab==="Yogurt" ? <Yogurt/>:""}
        
//       </div>
    
//     </div>
//   )
// }

// export default Dairy






import React, { useState,useEffect } from 'react'
import { Butter } from './Butter/Butter'
import { Cheese } from './Cheese/Cheese'
import { Dahi } from './Dahi/Dahi'
import { DairyProducts } from './Dairy Products/DairyProducts'
import { Milk } from './Milk/Milk'
import { Yogurt } from './Yogurt/Yogurt'

import MobileNavbar from "../../customer/Components/Navbar/MobileNavbar"
import SideBar from "../../customer/Components/Sidebar/Sidebar"
import Navbar from '../../customer/Components/Navbar/Navbar'

const sidebarDairy = ["Butter", "Milk", "Cheese", "Dairy Products", "Dahi", "Yogurt"]
function Dairy() {
  const [viewport,setViewport] = useState(false);
  useEffect(() => {
    if(window.innerWidth < 620){
      setViewport(true)
    }else{
      setViewport(false)
    }
  },[])
  const [activeTab, setActiveTab] = useState("All Dairy Products")
  return (
    <div>
      {viewport ? <MobileNavbar/> :  <Navbar number={12} />}
      <div className='flex flex-col lg:flex-row gap-6 font-semibold'>
        <SideBar setActiveTab={setActiveTab} activeTab={activeTab} title={"Dairy"} sidebarDairy={sidebarDairy} key={'2'} />
        <div className='overflow-hidden'>
          {activeTab === "All Dairy Products" ? <div className='flex flex-wrap w-full'>
          <Butter />
          <Cheese />
          <Dahi />
          <DairyProducts />
          <Milk />
          <Yogurt />
        </div> : null}
        </div>

        {activeTab === "Butter" ? <Butter /> : null}
        {activeTab === "Cheese" ? <Cheese /> : null}
        {activeTab === "Dahi" ? <Dahi /> : null}
        {activeTab === "Dairy Products" ? <DairyProducts /> : null}
        {activeTab === "Milk" ? <Milk /> : null}
        {activeTab === "Yogurt" ? <Yogurt /> : null}
      </div>
    </div>
  )
}

export default Dairy
