import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Route, Routes } from "react-router-dom";
import Order from "./components/Orders/Order";
import Profile from "./components/Profilemain/Profile";
import Navbar from "../customer/Components/Navbar/Navbar";
import './Myprofile.css'
import Payment from './components/Payment/Payment.js'
import WishList from './components/Wishlist/WishList.js'
import { ImUser } from "react-icons/im";
import { MdOutlinePayment } from "react-icons/md";
import { MdElectricScooter } from "react-icons/md";
import { FcLike } from "react-icons/fc";

const menu = [
  { name: "Orders", path: "/myprofile/orders", icon: <MdElectricScooter className="text-2xl" /> },
  { name: "Payment", path: "/myprofile/payment", icon: <MdOutlinePayment className="text-2xl" /> },
  { name: "Wish List", path: "/myprofile/likes", icon: <FcLike className="text-2xl" /> },
];

function Myprofile() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "bg-blue-200",
        overflow: "auto"
      }}
    >
      <List>
        <ListItem disablePadding onClick={() => navigate('/myprofile/profile')}>
          <ListItemButton sx={{
            "&:hover": {
              bgcolor: "rgba(135, 206, 250, 0.5)",
            },
          }} className="bg-blue-400">
            <ListItemIcon>
              <ImUser className="text-2xl" />
            </ListItemIcon>
            <ListItemText>Myprofile</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {menu.map((item) => (
          <ListItem
            sx={{
              color: "Black",
            }}
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
            className="cursor-pointer"
          >
            <ListItemButton sx={{
              "&:hover": {
                bgcolor: "rgba(135, 206, 250, 0.5)",
                borderBottom: "1px solid",
              },
              marginTop: "3px"
            }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{
            "&:hover": {
              bgcolor: "rgba(135, 206, 250, 0.5)",
            },
          }}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Log Out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {!isLargeScreen && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, mt: 2, position: 'absolute' }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box component="nav">
          <Drawer
            variant={isLargeScreen ? "permanent" : "temporary"}
            open={isLargeScreen || mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              width: { md: '240px' },
              flexShrink: { md: 0 },
              [`& .MuiDrawer-paper`]: { width: { md: '240px' }, boxSizing: 'border-box' },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            bgcolor: "rgba(135, 206, 250, 0.5)",
            p: 3,
            width: { sm: `calc(100% - ${240}px)` },
minHeight:"83vh"
          }}
        >
          <Toolbar />
          <div className="mt-[-40px]">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/likes" element={<WishList />} />
          </Routes>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Myprofile;
