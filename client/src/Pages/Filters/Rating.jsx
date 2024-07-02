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
import { useDispatch, useSelector } from "react-redux"


export default function RatingBox() {
    const rating = useSelector(setRating);
    const dispatch = useDispatch();

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={rating} r
                    label="Rating"
                    onChange={(e) => {
                        console.log("e", e.target.value);
                        dispatch(setRating(e.target.value));
                    }}
                >
                    <MenuItem value={3}>3 & more</MenuItem>
                    <MenuItem value={4}>4 & more</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
