import axios from "axios";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const auth = getAuth(app);
        const currentUser = auth.currentUser;

        if (currentUser) {
            const token = await currentUser.getIdToken();

            if (config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            } else {
                config.headers = {
                    Authorization: `Bearer ${token}`,
                };
            }
        }

        return config;
    },
    (error) => Promise.reject(error),
);

export default axiosInstance;
