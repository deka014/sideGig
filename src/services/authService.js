import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api/";

const authService = {
  sendOtp(phoneNumber) {
    return axios
      .post(API_URL + "auth/send-otp", {
        phoneNumber
      })
      .then(response => {
        console.log(response.data,"Sent OTP successfully")
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
        console.log(error);
      });
  },

  logout() {
    localStorage.removeItem("user");
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