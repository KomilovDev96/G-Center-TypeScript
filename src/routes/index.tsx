import CenterMain from "pages/Center";
import Centers from "pages/Centers";
import CreateCenter from "pages/CreateCenter";
import Signin from "pages/signin";
import Signup from "pages/signup";
import UsersCenters from "pages/Users";

export interface IRoute {
  path: string;
  component: JSX.Element;
  key: string;
}

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    component: <Signin />,
    key: "signin",
  },
  {
    path: "/signup",
    component: <Signup />,
    key: "signup",
  },
];


export const privateRoutes: IRoute[] = [
  {
    path: "/centers",
    component: <Centers />,
    key: "centers",
  },
  {
    path: "/create-center",
    component: <CreateCenter />,
    key: "createCenter",
  },
  {
    path: "/users-center",
    component: <UsersCenters />,
    key: "usersCenter",
  },
  {
    path: "/center",
    component: <CenterMain />,
    key: "center",
  },
];
