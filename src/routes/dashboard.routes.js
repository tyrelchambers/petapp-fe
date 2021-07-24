import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dashboardRoutes = [
  {
    slug: "/dashboard",
    label: "Overview",
    icon: <FontAwesomeIcon icon={faHome} className="text-gray-800 text-sm" />,
  },
  {
    slug: "/dashboard/profile",
    label: "Profile",
    icon: <FontAwesomeIcon icon={faUser} className="text-gray-800 text-sm" />,
  },
];
