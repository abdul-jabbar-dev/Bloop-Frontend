import axios from "axios";
import TError from "../../types/Errors/Error";
import TResponse from "../../types/Response/response";
import GetLocalStore from "../../helpers/localStore/getLocalStore";
import CONFIG from "../../config";
import RemoveLocalStore from "../../helpers/localStore/removeLocalStore";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;
// Add a request interceptor
instance.interceptors.request.use(
  //@ts-ignore
  function (config) {
    const accessToken = GetLocalStore(CONFIG.authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken; 
    }
    if (config.url?.includes("users/my-profile") && accessToken === null) {
      return {};
    } 
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor

instance.interceptors.response.use(
  // @ts-ignore
  function (response: any) {
    const responseObject: TResponse = {
      data: response?.data,
      meta: response?.meta,
    };
    return Promise.resolve(responseObject);
  },
  function (error) {
    if (
      error?.response?.data?.message === "This user has no record found" ||
      error?.response?.data?.message === "jwt expired"
    ) {
      RemoveLocalStore(CONFIG.authKey);
    }
    const responseObject: TError = {
      name: error?.response?.data?.name,
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      path: error?.response?.data?.path,
    };
    return Promise.reject(responseObject);
  }
);

export { instance };
