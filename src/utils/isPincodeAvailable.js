import dotenv from "dotenv";

dotenv.config();

export const isPinCodeAvailable = async (pincode) => {
  try {
    let headersList = {
      Authorization: `Token ${process.env.DELHIVERY_API_KEY}`,
    };

    let response = await fetch(
      `https://track.delhivery.com/c/api/pin-codes/json/?filter_codes=${pincode}`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    return data && data.delivery_codes && data.delivery_codes.length > 0
      ? data
      : false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
