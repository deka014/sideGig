import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8083/";

const authService = {
  login(email, password) {
    return axios
      .post(API_URL + "auth/token", {
        email,
        password
      })
      .then(response => {
        console.log(response.data,"i am the data")
        if (response.data) {
          localStorage.setItem("user", response.data);
        }
        return response.data;
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