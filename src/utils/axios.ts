import axios from "axios";

// instance.interceptors.request.use(
//   async (config) => {
//     const token = await localStorage.getItem("token");
//     console.log(11111);
//     if (token) {
//       config.headers.authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
