


import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function SideBar({showall,setShowAll, sidebarDairy, title, setActiveTab,activeTab,setActiveSubTab }) {
  const location = useLocation();
  const [click,setClick] = useState(false);
  const [toggleBar ,setToggleBar] = useState(true);


  return (
    <div className='max-h-screen sticky top-0  p-3 w-full lg:w-[12rem] '>
      <div onClick={() => setToggleBar(!toggleBar)} className='bg-white/70 h-16 ml-4 lg:ml-0  lg:w-56 backdrop-blur-lg flex gap-2 items-center scale-110   '>
        <svg className='block md:block lg:hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
              <h2 >{title}</h2>

        </div>
      <div className={`${toggleBar?'hidden':''}   bg-white/70  backdrop-blur-lg  lg:static lg:block ml-4 border lg:w-full mt-3 text-sm space-y-3`}>
        {sidebarDairy.map((item) => (
          <div
            to={location.pathname}
            onClick={() => {
              setActiveTab(item.name)
              setShowAll(!showall)
              setClick(!click)
            }}
            className='flex flex-col transition-all py-1 px-2 hover:bg-green-200/90'
            key={item.name}
          >
            <h2 className={`${activeTab === item.name ? showall ? 'underline underline-offset-2':'':''}`}>{item.name}</h2>
            
            
            {activeTab === "All Grocery"?"": activeTab === item.name ? <div className='bg-green-200 pl-4 pr-3 transition-all  '>{item.subCatog.map((items,i) => {
              
                return <button key={i} onClick={() => setActiveSubTab(items)} className='flex font-normal capitalize my-3 hover:underline transition-all'>{items}</button>
             
            }) }</div>:""}
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
