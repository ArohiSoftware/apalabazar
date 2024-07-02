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

export default function DiscountBox() {
    const discount = useSelector(selectDiscountRange);
    const dispatch = useDispatch();

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Discount</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={discount}
                    label="Discount"
                    onChange={(e) => {
                        console.log("e", e.target.value);
                        dispatch(setDiscountRange(e.target.value));
                    }}
                >
                    <MenuItem value={30}>30% or more</MenuItem>
                    <MenuItem value={40}>40% or more</MenuItem>
                    <MenuItem value={50}>50% or more</MenuItem>
                    <MenuItem value={60}>60% or more</MenuItem>
                    <MenuItem value={70}>70% or more</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}