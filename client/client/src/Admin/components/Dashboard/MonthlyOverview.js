import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Grid,
  Box,
  Typography,
  CardHeader,
  IconButton,
  CardContent,
  Card,
} from "@mui/material";

const salesData = [
  {
    states: "245k",
    title: "sales",
    color: "#44CB9C",
    icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    states: "24.5k",
    title: "customers",
    color: "#22CB5C",
    icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    states: "2.2k",
    title: "products",
    color: "#DE4839",
    icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    states: "2.2k",
    title: "Revenue",
    color: "#12B0E8",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderState = () => {
  return salesData.map((data, index) => (
    <Grid item xs={6} md={3} key={index}>
      <Box display="flex" alignItems="center">

        <Avatar  variant="rounded"
         sx={{ 
          mr: 3,
          width:44,
          height:44,
          boxShadow:3,
          color:"common.white",
          backgroundColor:`${data.color}`
          }}>{data.icon}</Avatar>
        <Box>
          <Typography variant="h6">{data.states}</Typography>
          <Typography variant="body2" color="grey">
            {data.title}
          </Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
   <div className="p-5 ">
     <Card sx={{ color:"green"}}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "text.white" }}
            >
              Total 48.8% growth
            </Box>{" "}
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important",
            color:"black",
            fontFamily : "sans-serif",
            fontWeight: "bold", 
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderState()}
        </Grid>
      </CardContent>
    </Card>
   </div>
  );
};

export default MonthlyOverview;
