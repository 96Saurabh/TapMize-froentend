import axios from "axios";

const backendUrl = "http://localhost:8080/api/v1"; // Update this to your backend URL if different

export const getSingleUserProfile = async (userid) => {
  try {
    const reqUrl = `${backendUrl}/profile/66c60887e0b4e2f5a217caff`; // Endpoint with userid
    const response = await axios.get(reqUrl);
    return response.data; // Return the user data directly
  } catch (error) {
    console.log(error);
    alert("Something went wrong while fetching the user profile.");
    return null; // Return null on error to handle it in the UI
  }
};
