import {useSelector} from "react-redux";
import {authIsUserLoggedSelector} from "../../Redux/auth/selectors";
import {FunctionComponent, ReactNode} from "react";
import {Navigate} from "react-router";
import {ROUTES} from "../../Routes";

interface ProtectedRouteProps {
    children: ReactNode;
}

export const PrivateRoute: FunctionComponent<ProtectedRouteProps> = ({children}) => {
    const authIsUserLogged = useSelector(authIsUserLoggedSelector);

    if (!authIsUserLogged) {
        return <Navigate to={ROUTES.LOGIN}/>;
    }

    return <> {children} </>;
};