export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    // const user = localStorage.getItem('user');
  
    // if (user && user.token) {
    //   return { Authorization: 'Bearer ' + user }; // for Spring Boot back-end
     
    // } else {
    //   return {};
    // }

    if (user ) {
      return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
     
    } else {
      return {};
    }
  }