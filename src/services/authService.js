import axios from "axios";
import { toast } from "react-toastify";

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api/` || "http://localhost:4000/api/";

const authService = {
  sendOtp(phoneNumber) {
    return axios
      .post(API_URL + "auth/send-otp", {
        phoneNumber
      })
      .then(response => {
        console.log(response.data,"Sent OTP successfully")
        toast.success(
          'OTP sent successfully',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          }
        )
        return response.data;
      });
  },

  verifyOtp(phoneNumber, otp) {
    return axios
      .post(API_URL + "auth/verify-otp", {
        phoneNumber,
        otp
      })
      .then(response => {
        console.log(response.data,"Verified OTP successfully")
        if (response.data) {
          const stringifyData = JSON.stringify(response.data);
          localStorage.setItem("user", stringifyData);
        }
        return response.data;
      }).catch((error) => {
        throw error.response?.data.error || new Error("Failed to verify OTP");
        // console.log(error);
      });
  },

  logout(redirectTo) {
    localStorage.removeItem("user");
    // return to home page
    if (redirectTo) {
      window.location = redirectTo;
    }
    // window.location.href = "/";
  },

  // register(formData) {
  //   return axios.post(API_URL + "register", formData);
  // },

  // getCurrentUser() {
  //   return JSON.parse(localStorage.getItem('user'));;
  // }

  getCurrentUser() {
    return localStorage.getItem('user');;
  }
}

export default authService;