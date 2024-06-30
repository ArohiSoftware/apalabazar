import React, { useState,useEffect } from 'react';


import SideBar from '../../customer/Components/Sidebar/Sidebar';
import Navbar from '../../customer/Components/Navbar/Navbar';
import MobileNavbar from '../../customer/Components/Navbar/MobileNavbar';
import { LightBatteries } from './LightBatteries/LightBatteries';

const sidebarDairy = [
  {
    name: 'Home Appliances',
    subCatog: ['Light & Batteries']
  }
];

function HomeAppliances() {
  const [activeTab, setActiveTab] = useState('Home Appliances');
  const [activeSubTab, setActiveSubTab] = useState('');
  const [showall,setShowAll] = useState(true);

const [viewport,setViewport] = useState(false);
  useEffect(() => {
    if(window.innerWidth < 620){
      setViewport(true)
    }else{
      setViewport(false)
    }
  },[])


  return (
    <div>
            {viewport ? <MobileNavbar/> :  <Navbar number={12} />}

      <div className='flex flex-col lg:flex-row gap-6 font-semibold'>
        <SideBar title={"Appliances"} showall={showall} setShowAll={setShowAll} setActiveSubTab={setActiveSubTab} setActiveTab={setActiveTab} activeTab={activeTab}  sidebarDairy={sidebarDairy} key={'2'} />
        
    <div className='overflow-hidden'>
      
        {activeTab === 'Home Appliances' ? <LightBatteries showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
    </div>
      
    </div>
    </div>
  );
}

export default HomeAppliances;
