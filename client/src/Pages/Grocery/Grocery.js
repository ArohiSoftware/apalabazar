import React, { useState, useEffect } from "react";
import { Cookingoil } from "./Cookingoil/Cookingoil";
import { Dryfruits } from "./Dryfruits/Dryfruits";
import { Flours } from "./Flours/Flours";
import { Masala } from "./Masala & Spices/Masala";
import { Pulses } from "./Pulses/Pulses";
import { SaltSugarJaggery } from "./Salt-Sugar-Jaggery/Salt-Sugar-Jaggery";

import SideBar from "../../customer/Components/Sidebar/Sidebar";
import Navbar from "../../customer/Components/Navbar/Navbar";
import MobileNavbar from "../../customer/Components/Navbar/MobileNavbar";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setPriceRange,
  setDiscountRange,
  setRating,
  selectPriceRange,
  selectDiscountRange,
} from "../../Redux/productsFilter";

import PriceBox from "../Filters/Price";
import DiscountBox from "../Filters/Discount";
import RatingBox from "../Filters/Rating";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarDairy = [
  {
    name: "All Grocery",
    subCatog: [],
  },
  {
    name: "Dry Fruits",
    subCatog: [
      "Almonds",
      "Cashews",
      "Pista",
      "Dates",
      "Raisins",
      "Walnuts",
      "Mixed Dryfruits",
      "Charoli",
      "Makhana",
      "Anjeer",
    ],
  },
  {
    name: "Flours",
    subCatog: [
      "Sunflower Oil",
      "Groundnut Oil",
      "Blended Oil",
      "Rice Bran Oil",
      "Mustard Oil",
      "Olive Oil",
      "Other Oils",
    ],
  },
  {
    name: "Masala & Spices",
    subCatog: [
      "Whole Spices",
      "Powdered Spices",
      "Chilli Powder",
      "Turmeric Powder",
      "Coriander Powder",
      "Cooking Pastes",
      "Herbs & Seasonings",
      "Ready Mix Masalas",
      "Food Essence",
    ],
  },
  {
    name: "Pulses",
    subCatog: [
      "Rajma",
      "Chowli",
      "Soya Products",
      "Kabuli Chana",
      "Chana",
      "Urad",
      "Moong",
      "Masoor",
      "Vatana",
      "Other Whole Pulses",
      "Groundnut",
    ],
  },
  {
    name: "Salt & Sugar",
    subCatog: ["Salt", "Sugar"],
  },
  {
    name: "Cooking Oil",
    subCatog: [
      "Sunflower Oil",
      "Groundnut Oil",
      "Blended Oil",
      "Rice Bran Oil",
      "Mustard Oil",
      "Olive Oil",
      "Other Oils",
    ],
  },
];

function Grocery() {
  const [activeTab, setActiveTab] = useState("All Grocery");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [showall, setShowAll] = useState(true);
  const dispatch = useDispatch();
  const rating = useSelector(setRating);
  const price = useSelector(selectPriceRange);
  const loc = useLocation();
  const navigate = useNavigate();
  console.log(price);

  const catogeryPaths = [
    {
      name: "Dry Fruits",
      path: "/grocery/dry-fruits",
    },
    {
      name: "Flours",
      path: "/grocery/flours-grains",
    },
    {
      name: "Masala & Spices",
      path: "/grocery/masala-spices",
    },
    {
      name: "Pulses",
      path: "/grocery/pulses",
    },
    {
      name: "Salt & Sugar",
      path: "/grocery/salt-sugar-jaggery",
    },
    {
      name: "Cooking Oil",
      path: "/grocery/cooking-oil",
    },
  ];
  const [viewport, setViewport] = useState(false);
  useEffect(() => {
    console.log(loc.pathname);
    catogeryPaths.map((catogery) => {
      if (loc.pathname === catogery.path) {
        setActiveTab(catogery.name);
        navigate("/grocery");
      }
    });
    if (window.innerWidth < 620) {
      setViewport(true);
    } else {
      setViewport(false);
    }
  }, [activeTab, setActiveTab, loc.pathname]);

  return (
    <div className="">
      {viewport ? <MobileNavbar /> : <Navbar number={12} />}

      <div className="flex flex-col lg:flex-row  font-semibold ">
        <SideBar
          showall={showall}
          setShowAll={setShowAll}
          setActiveSubTab={setActiveSubTab}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          title={"Grocery"}
          sidebarDairy={sidebarDairy}
          key={"2"}
        />

        <div className=" w-full ">
          <div className="flex gap-12 mt-8 flex-wrap justify-center lg:justify-end items-center w-full ">
            <span
              className={`bg-slate-200 text-xl flex gap-3 rounded-lg px-4 p-2 ${
                price === 0 ? "hidden" : "block"
              }`}
            >
              {price}
              <button onClick={() => dispatch(setPriceRange(0))}>
                <CloseIcon />
              </button>
            </span>
            <PriceBox />
            <DiscountBox />
            <RatingBox />
          </div>
          {activeTab === "All Grocery" ? (
            <div className="flex justify-center items-center  flex-wrap w-full">
              <Dryfruits
                activeSubTab={activeSubTab}
                setActiveTab={setActiveSubTab}
              />
              <Flours activeSubTab={activeSubTab} />
              <Masala activeSubTab={activeSubTab} />
              <Pulses activeSubTab={activeSubTab} />
              <SaltSugarJaggery activeSubTab={activeSubTab} />
            </div>
          ) : null}

          {activeTab === "Dry Fruits" ? (
            <Dryfruits
              showall={showall}
              activeSubTab={activeSubTab}
              setActiveTab={setActiveSubTab}
            />
          ) : null}
          {activeTab === "Flours" ? (
            <Flours
              activeSubTab={activeSubTab}
              setActiveTab={setActiveSubTab}
            />
          ) : null}
          {activeTab === "Masala & Spices" ? (
            <Masala
              activeSubTab={activeSubTab}
              setActiveTab={setActiveSubTab}
            />
          ) : null}
          {activeTab === "Pulses" ? (
            <Pulses
              activeSubTab={activeSubTab}
              setActiveTab={setActiveSubTab}
            />
          ) : null}
          {activeTab === "Salt & Sugar" ? (
            <SaltSugarJaggery
              activeSubTab={activeSubTab}
              setActiveTab={setActiveSubTab}
            />
          ) : null}
          {activeTab === "Cooking Oil" ? (
            <Cookingoil
              activeSubTab={activeSubTab}
              setActiveTab={setActiveSubTab}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Grocery;

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
