import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";
import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname} />;
    }

    return children;
};

export default PrivateRoute;
