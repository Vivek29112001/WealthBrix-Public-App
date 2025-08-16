import axios from "axios";

export const commonRequest = async (method, url, data = null, headers = {}, responseType = "json") => {
    try {
        const config = {
            method,
            url,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            responseType,
        };

        if (data) {
            if (method.toLowerCase() === "get") {
                config.params = data; // GET ke liye query params
            } else {
                config.data = data; // POST/PUT ke liye body
            }
        }

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error.response?.data || error.message;
    }
};
