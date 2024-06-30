import React, { useState,useEffect } from 'react';
import { Cookingoil } from './Cookingoil/Cookingoil';
import { Dryfruits } from './Dryfruits/Dryfruits';
import { Flours } from './Flours/Flours';
import { Masala } from './Masala & Spices/Masala';
import { Pulses } from './Pulses/Pulses';
import { SaltSugarJaggery } from './Salt-Sugar-Jaggery/Salt-Sugar-Jaggery';

import SideBar from '../../customer/Components/Sidebar/Sidebar';
import Navbar from '../../customer/Components/Navbar/Navbar';
import MobileNavbar from '../../customer/Components/Navbar/MobileNavbar';

const sidebarDairy = [
  {
    name: 'All Grocery',
    subCatog: []
  },
  {
    name: 'Dry Fruits',
    subCatog: ['Almonds', 'Cashews', 'Pista', 'Dates', 'Raisins', 'Walnuts', 'Mixed Dryfruits', 'Charoli', 'Makhana', 'Anjeer']
  },
  {
    name: 'Flours',
    subCatog: ['Sunflower Oil', 'Groundnut Oil', 'Blended Oil', 'Rice Bran Oil', 'Mustard Oil', 'Olive Oil', 'Other Oils']
  },
  {
    name: 'Masala & Spices',
    subCatog: ['Whole Spices', 'Powdered Spices', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cooking Pastes', 'Herbs & Seasonings', 'Ready Mix Masalas', 'Food Essence']
  },
  {
    name: 'Pulses',
    subCatog: ['Rajma', 'Chowli', 'Soya Products', 'Kabuli Chana', 'Chana', 'Urad', 'Moong', 'Masoor', 'Vatana', 'Other Whole Pulses', 'Groundnut']
  },
  {
    name: 'Salt & Sugar',
    subCatog: ['Salt', 'Sugar']
  },
  {
    name: 'Cooking Oil',
    subCatog: ['Sunflower Oil', 'Groundnut Oil', 'Blended Oil', 'Rice Bran Oil', 'Mustard Oil', 'Olive Oil', 'Other Oils']
  }
];

function Grocery() {
  const [activeTab, setActiveTab] = useState('All Grocery');
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
    <div className=''>
            {viewport ? <MobileNavbar/> :  <Navbar  number={12} />}

      <div className='flex flex-col lg:flex-row  font-semibold '>
        <SideBar  showall={showall} setShowAll={setShowAll} setActiveSubTab={setActiveSubTab} setActiveTab={setActiveTab} activeTab={activeTab} title={"Grocery"} sidebarDairy={sidebarDairy} key={'2'} />
        <div className='overflow-hidden '>
          
        {activeTab === 'All Grocery' ? (
          <div className='flex  flex-wrap w-full'>
            <Dryfruits activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} />
            <Flours activeSubTab={activeSubTab} />
            <Masala activeSubTab={activeSubTab} />
            <Pulses activeSubTab={activeSubTab} />
            <SaltSugarJaggery activeSubTab={activeSubTab} />
          </div>
        ) : null}

        {activeTab === 'Dry Fruits' ? <Dryfruits showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        {activeTab === 'Flours' ? <Flours activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        {activeTab === 'Masala & Spices' ? <Masala activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        {activeTab === 'Pulses' ? <Pulses activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        {activeTab === 'Salt & Sugar' ? <SaltSugarJaggery activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        {activeTab === 'Cooking Oil' ? <Cookingoil activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Grocery;
