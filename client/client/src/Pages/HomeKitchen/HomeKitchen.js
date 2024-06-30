import React, { useState,useEffect } from 'react';


import SideBar from '../../customer/Components/Sidebar/Sidebar';
import Navbar from '../../customer/Components/Navbar/Navbar';
import MobileNavbar from '../../customer/Components/Navbar/MobileNavbar';
import { DetergentFabricCare } from './DetergentFabricCare/DetergentFabricCare';
import { Cleaners } from './Cleaners/Cleaners';

const sidebarDairy = [
  {
    name: 'Home & Kitchen',
    subCatog: []
  },
  {
    name: 'Detergent & Fabric Care',
    subCatog: ['Liquid Detergent','Detergent Powder','Detergent Bar','Fabric Care']
  },
  {
    name: 'Cleaners',
    subCatog: ['Floor Cleaners','Toilet Cleaners','Other Cleaners']
  },
  {
    name: 'Utensil Cleaner',
    subCatog: ['Dishwash Liquids','Dishwash Bars','Sponges & Scrubs']
  },
  {
    name: 'Freshener & Repellents',
    subCatog: ['Air Fresheners','Repellents']
  },
  {
    name: 'Disinfectants',
    subCatog: ["Disinfectant Liquid & Spray"]
  },
  {
    name: 'Tissue Paper & Napkins',
    subCatog: ["Aluminium Foils","Face Tissues","Kitchen Tissues","Tissue Paper & Napkins","Toilet Paper"]
  },
  {
    name: 'Pooja Needs',
    subCatog: ["Pooja Oil","Camphor & Kapur","Agarbatti","Pooja Items"]
  },
  {
    name: 'Home Utility',
    subCatog: ["Lights & Batteries"]
  }
];

function HomeKitchen() {
  const [activeTab, setActiveTab] = useState('Home & Kitchen');
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
            {viewport ? <MobileNavbar/> :  <Navbar setActiveTab={setActiveTab} number={12} />}

      <div className='flex flex-col lg:flex-row gap-6 font-semibold'>
        <SideBar title="Home & Kitchen" showall={showall} setShowAll={setShowAll} setActiveSubTab={setActiveSubTab} setActiveTab={setActiveTab} activeTab={activeTab} sidebarDairy={sidebarDairy} key={'2'} />
        
        <div className='overflow-hidden'>
          {activeTab === 'Home & Kitchen' ? (
          <div className='flex flex-wrap w-full'>
            <DetergentFabricCare showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} />
            <Cleaners showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} />
          </div>
        ) : null}

        {activeTab === 'Detergent & Fabric Care' ? <DetergentFabricCare showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        {activeTab === 'Cleaners' ? <Cleaners showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        </div>
      
    </div>
    </div>
  );
}

export default HomeKitchen;
