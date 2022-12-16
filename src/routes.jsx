import { Home, Gallery, Services, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Services",
    path: "/services",
    element: <Services />,
  },
];

export default routes;
