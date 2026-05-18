import axios from "axios";
import app from "../firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

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

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error?.response?.status;

        if (status === 401) {
            toast.error("Session expired. Please log in again.");

            console.error(
                "Unauthorized request - token may be invalid or expired.",
            );

            const auth = getAuth(app);
            try {
                await signOut(auth);
            } catch (signOutError) {
                console.error("Error signing out after 401:", signOutError);
            }

            if (typeof window !== "undefined") {
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
