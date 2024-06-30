import styled from "@emotion/styled";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
const TrignleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

function Achivement() {
  return (
    <div className="p-5">
      <Card className="bg-white" sx={{ position: "relative", color: "black" }}>
        <CardContent>
          <Typography variant="h5" sx={{ letterSpacing: ".25px", fontWeight: "bold", fontFamily: "sans-serif", mb:3 }}>
            Shop with Apana Bazar
          </Typography>
          <TrophyImg src="https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-c4d-hd-enterprise-golden-trophy-enterprise-honor-gold-cup-cupenterprise-honorqualificationgolden-png-image_621239.jpg"></TrophyImg>

          <Typography variant="body2" sx={{ letterSpacing: ".25px", fontWeight: "bold", fontFamily: "sans-serif",}}>Congratulation 🥰</Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>200k</Typography>
          <Button className="" size="small" variant="contained" sx={{ mt: 1 }}>
            view sales
          </Button>

          
        </CardContent>
      </Card>
    </div>
  );
}

export default Achivement;
