import Temp from "../components/temp";
import ButtonUsage from "../components/login/but";
import {constantRoutes} from "./costantRoutes";

//config for our routes
export const config = [
    {
        path: constantRoutes.home,
        element: <Temp content={"home"} />,
    },
    {
        path: constantRoutes.login,
        element: <ButtonUsage />,
    },
    {
        path: constantRoutes.signup,
        element: <ButtonUsage />,
    }
];