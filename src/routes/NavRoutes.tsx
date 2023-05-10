import { Profile, Setting } from "assets/images";

interface IRoute {
  title: string;
  path: string;
  key: string;
}

interface IDropdownRoute extends IRoute {
  icon: JSX.Element;
}

const routes: IRoute[] = [
  {
    title: "Dashboard",
    path: "/",
    key: "Dashboard",
  },
  {
    title: "Centers",
    path: "/centers",
    key: "centers",
  },
  {
    title: "Users",
    path: "/users-center",
    key: "users",
  },
  {
    title: "Center",
    path: "/center",
    key: "center",
  },
];

const profile = "profile";
const setting = "setting";

export const dropdownRoute: IDropdownRoute[] = [
  {
    title: profile,
    key: profile,
    path: "/" + profile,
    icon: <Profile />,
  },
  {
    title: setting,
    key: setting,
    path: "/" + setting,
    icon: <Setting />,
  },
];

export default routes;
