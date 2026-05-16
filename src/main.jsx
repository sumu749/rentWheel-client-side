import ReactDOM from "react-dom/client";

import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { RouterContextProvider } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <RouterContextProvider></RouterContextProvider>
        <Toaster position="top-center" />
    </AuthProvider>,
);
