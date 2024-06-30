// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Box,
//   CssBaseline,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   useMediaQuery,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import { useTheme } from "@mui/material/styles";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Route, Routes } from "react-router-dom";
// import AdminDashboard from "./components/Dashboard/Dashboard";
// import CreateProductForm from "./components/createProduct/CreateProductForm";
// import OrdersTable from "./components/Orders/OrdersTable";
// import ProductsTable from "./components/Products/ProductsTable";
// import Customers from "./components/Customer/Customer";
// import UpdateProducts from "./components/updateProduct/UpdateProducts";
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import AddIcon from '@mui/icons-material/Add';

// const menu = [
//   { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
//   { name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon /> },
//   { name: "Customers", path: "/admin/customers", icon: <PersonOutlineIcon /> },
//   { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
//   { name: "Add Products", path: "/admin/product/create", icon: <AddIcon /> },
// ];

// function AdminPanel() {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
//   const navigate = useNavigate();
//   const [toggle,setToggle] = useState(false);

//   const drawer = (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100%",
//         boxShadow: "rgba(135, 206, 250, 0.5) 0px 3px 8px",
//         // Remove borders
//         border: "none",
//         // Tailwind CSS classes for interactive design
//         transition: "all 0.3s",
//         "&:hover": {
//           boxShadow: "rgba(135, 206, 250, 0.5) 0px 5px 15px",
//           transform: "scale(1.02)",
//         },
//       }}
//       className="bg-white"
//     >
//       {isLargeScreen && <Toolbar />}

//       <List>

//         {menu.map((item) => (
//           <ListItem
//             sx={{
//               color: "Black",

//             }}
//             key={item.name}
//             disablePadding
//             onClick={() => navigate(item.path)}
//             className="cursor-pointer"
//           >
//             <ListItemButton sx={{

//               "&:hover": {
//                 bgcolor: "rgba(135, 206, 250, 0.5)",
//                 transform: "scale(1.02)",
//               },
//             }}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText>{item.name}</ListItemText>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <Box sx={{ flexGrow: 1 }} />

//       <List>
//         <ListItem disablePadding>
//           <ListItemButton sx={{

//             "&:hover": {
//               bgcolor: "rgba(135, 206, 250, 0.5)",
//               transform: "scale(1.02)",
//             },
//           }}>
//             <ListItemIcon>
//               <AccountCircleIcon />
//             </ListItemIcon>
//             <ListItemText>Account</ListItemText>
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <CssBaseline />
//       <Box sx={{ display: 'flex', height: '100vh' }}>
//         <Drawer
//           variant="permanent"
//           sx={{
//             width: '15%',
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: '15%',
//               boxSizing: 'border-box',
//               // Ensure Tailwind CSS classes are applied correctly
//               '&:hover': {
//                 boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//                 transform: "scale(1.02)",

//               },
//             },
//           }}
//           className="bg-white"
//         >
//           {drawer}
//         </Drawer>
//         <Box
//           component="main"
//           sx={{ flexGrow: 1, bgcolor: "rgba(135, 206, 250, 0.5)", p: 3, minHeight: '150vh' }}
//         >
//           <Routes>
//             <Route path="/" element={<AdminDashboard />} />
//             <Route path="/product/create" element={<CreateProductForm />} />
//             <Route path="products" element={<ProductsTable />} />
//             <Route path="/orders" element={<OrdersTable />} />
//             <Route path="/customers" element={<Customers />} />
//           </Routes>
//         </Box>
//       </Box>
//     </div>
//   );
// }

// export default AdminPanel;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/Dashboard";
import CreateProductForm from "./components/createProduct/CreateProductForm";
import OrdersTable from "./components/Orders/OrdersTable";
import ProductsTable from "./components/Products/ProductsTable";
import Customers from "./components/Customer/Customer";
import UpdateProducts from "./components/updateProduct/UpdateProducts";
import Navbar from "./tables/navbar";
import { FaTachometerAlt, FaBoxOpen, FaTags, FaShoppingCart, FaUser, FaCog, FaTimes } from 'react-icons/fa';

const sidebarClasses = 'w-64 bg-white border-r border-gray-200 shadow-lg fixed lg:static h-full z-50';
const linkClasses = 'flex items-center p-4 mt-2 text-gray-600 hover:bg-gray-100 hover:text-green-500 rounded-lg transition-colors duration-200';
const activeLinkClasses = 'flex items-center p-4 text-green-500 bg-gray-100 rounded-lg font-bold shadow-sm';

const menu = [
  { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
  { name: "Products", path: "/admin/products", icon: <FaBoxOpen /> },
  { name: "Add Products", path: "/admin/product/create", icon: <FaTags /> },
  { name: "Customers", path: "/admin/customers", icon: <FaUser /> },
  { name: "Orders", path: "/admin/orders", icon: <FaShoppingCart /> },
  { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
];

function AdminPanel() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="flex w-screen">
      <div className="bg-[#eff4f8] w-fit">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex h-full">
          {isSidebarOpen && (
            <div className={sidebarClasses}>
              <div className="p-4 flex justify-between items-center w-[280px]">
                <h1 className="text-2xl font-bold text-green-500">Admin</h1>
                <button className="text-gray-600 hover:text-green-500 lg:hidden" onClick={toggleSidebar}>
                  <FaTimes />
                </button>
              </div>
              <nav className="mt-8 h-screen">
                {menu.map((item, index) => (
                  <Link to={item.path} key={index} className={linkClasses}>
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
          <div className='flex-grow '>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/product/create" element={<CreateProductForm />} />
              <Route path="/products" element={<ProductsTable />} />
              <Route path="/orders" element={<OrdersTable />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
