import React from "react";
import { Grid, Box } from "@mui/material";
import Achivement from "./Achivement";
import MonthlyOverview from "./MonthlyOverview";
import ProductsTable from "../Products/ProductsTable";
import Customers from "../Customer/Customer";
import Navbar from "../../tables/navbar";
import ChartGallery from "../../tables/ChartGallery";
import Analytics from "./Analytics";
import Analytics2 from "./Analytics2";
import Analytics3 from "./Analytics3";

function AdminDashboard() {
  return (
    <div className=" bg-transparent ">
      {/* {
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Achivement /> 
          </Grid>
          <Grid item xs={10} md={8}>
            <MonthlyOverview />
          </Grid>

          <Box mt={0} mb={0} mx={1.5}>
            <ChartGallery />
          </Box>
          <Grid item xs={12} md={6}>
            <Box mx={3}>
              <ProductsTable />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mx={3}>
              <Customers />
            </Box>
          </Grid>
        </Grid>
      </Box>
      } */}


        <Analytics/>
        <Analytics2/>
        <Analytics3/>


    </div>
  );
}

export default AdminDashboard;
