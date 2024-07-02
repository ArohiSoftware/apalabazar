import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import {
    setPriceRange,
    setDiscountRange,
    setRating,
    selectPriceRange,
    selectDiscountRange,
} from "../../Redux/productsFilter";
import { useDispatch, useSelector } from "react-redux";

export default function PriceBox() {
    const dispatch = useDispatch();
    const pricerange = useSelector(selectPriceRange);

    const prices = [
        {
            value: 100,
            label: "100",
        },
        {
            value: 200,
            label: "200",
        },

        {
            value: 400,
            label: "400",
        },
        {
            value: 500,
            label: "500",
        },

        {
            value: 700,
            label: "700",
        },

        {
            value: 1000,
            label: "1000",
        },
    ];
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Price Range</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pricerange}
                    label="Price Range"
                    onChange={(e) => {
                        console.log("e", e.target.value);
                        dispatch(setPriceRange(e.target.value));
                    }}
                >
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                    <MenuItem value={500}>500</MenuItem>
                    <MenuItem value={1000}>1000</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                    <MenuItem value={3000}>3000</MenuItem>
                    <MenuItem value={4000}>4000</MenuItem>
                    <MenuItem value={10000}>10000</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
