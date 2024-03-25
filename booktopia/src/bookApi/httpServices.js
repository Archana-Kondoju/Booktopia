import axios from "axios";
import { toast }from 'react-toastify';
import logger from './logServices';


axios.interceptors.response.use(
  null,
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (expectedError) {
      switch (error.response.status) {
        case 404:
          toast("The requested resource was not found.");
          break;
        default:
          toast("An unexpected error occurred.");
          break;
      }
      logger.log(error);
    }
    return Promise.reject(error);
  }
);
// axios.interceptors.response.use(null, error => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   // Unexpected errors (network down, server down, db down, bug)
//   // - Log them
//   // - Display generic and friendly error message to user

//   if (expectedError) {
//     toast("An unexpected error occurred");
//     logger.log(error);
//   }
//   return Promise.reject(error);
// });

const http = {
  get: axios.get,
  post: axios.post,
  // put: axios.put,
  // delete: axios.delete
};

export default http;