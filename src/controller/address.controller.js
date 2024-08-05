
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Address from "../models/address.model.js";
import {ApiError} from "../utils/ApiError.js"


const addAddress = asyncHandler(async(req, res) => {
      const { id } = req.user; 

    const { 
        fullName,

        houseNumber,
        landMark,
        streetAddress,
        area,
        city, 
        state, 
        zipCode,
        district,
        mobile,
        extraMobile
        
    } = req.body;

   // console.log("req.body => ", req.body);

    if(!fullName || !streetAddress || !city || !state || !zipCode || !district || !mobile) {
        return res
            .status(400)
            .json(new ApiError(400, 'Please provide all the required fields', ));
    }

    const user = await User.findById(id)

   // console.log("user => ", user);

    if(!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found', ));
    }

    try {

        const address = await Address.create({

            fullName,
            houseNumber,
            landMark,
            streetAddress,
            area,
            city, 
            state, 
            zipCode,
            district,
            mobile,
            extraMobile,
            user: id,
            

        });

       // console.log("address user => ", address.user);


        await address.save();


       return res
            .status(200)
            .json(new ApiResponse(200, 'address added successfully', address));
    } 
    
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json(new ApiError(500, 'Internal server error', error.message));
    }
})




const updateAddress = asyncHandler(async(req, res) => {
    const { id } = req.user; 

    const { 
        addressId,
        fullName,
        houseNumber,
        landMark,
        streetAddress,
        area,
        city, 
        state, 
        zipCode,
        district,
        mobile,
        extraMobile
    } = req.body;

    try {
    
        const address = await Address.findById(addressId);

        if (!address) {
            return res
                .status(404)
                .json(new ApiResponse(404, 'Address not found', null));
        }


        if(fullName) {
            address.fullName = fullName;
        }
        if(houseNumber) {
            address.houseNumber = houseNumber;
        }
        if(landMark) {
            address.landMark = landMark;
        }
        if(streetAddress) {
            address.streetAddress = streetAddress;
        }
        if(area) {
            address.area = area;
        }
        if(city) {
            address.city = city;
        }
        if(state) {
            address.state = state;
        }
        if(zipCode) {
            address.zipCode = zipCode;
        }
        if(district) {
            address.district = district;
        }
        if(mobile) {
            address.mobile = mobile;
        }
        if(extraMobile) {
            address.extraMobile = extraMobile;
        }   


        await address.save();


       return res
            .status(200)
            .json(new ApiResponse(200, 'address updated successfully', address));
        
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
})



const deleteAddress = asyncHandler(async(req, res) => {
    const { id } = req.user; 
    const { addressId } = req.query;

    console.log("req.query => ", req.query);

    console.log("req.params => ", req.params);

    console.log("addressId => ", addressId);

    const user = await User.findById(id);

    if(!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found', ));
    }

    try {
        const address = await Address.findByIdAndRemove({_id :addressId});


        console.log("address => ", address);

       return res
            .status(200)
            .json(new ApiResponse(200, 'Address deleted successfully', address));
        
    } 
    catch (error) {
        
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
})


const getAllAddress = asyncHandler(async (req, res) => {
    const { id } = req.user;  // Hardcoded user ID for testing

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(401).json(new ApiError(401, 'User not found'));
        }

        const addresses = await Address.find({ user: id }).populate('user');

        if (!addresses.length) {
            return res.status(404).json(new ApiResponse(404, 'Addresses not found', null));
        }

        return res.status(200).json(new ApiResponse(200, 'Addresses retrieved successfully', addresses));
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

//// export the address controllers
export {
    addAddress,
    updateAddress,
    deleteAddress,
    getAllAddress
}
