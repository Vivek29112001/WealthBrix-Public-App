import { commonRequest } from "./config";

const BASE_URL = process.env.NEXT_PUBLIC_API_AUTH_URL || "http://localhost:5000/api";

const apiRequest = async (method, endpoint, data = null, headers = {}, responseType = "json") => {
    const url = `${BASE_URL}${endpoint}`;
    return await commonRequest(method, url, data, headers, responseType);
};


//property apis
export const getAllProperties = async () => {
    return await apiRequest("GET", "/properties");
};
