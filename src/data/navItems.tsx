import React from "react";
import { INavItem } from "../@interfaces";
import {
  FiArrowLeft,
  FiBarChart2,
  FiCheckSquare,
  FiHome,
  FiLayers,
  FiSettings,
  FiFlag,
  FiMapPin,
} from "react-icons/fi";

export const navItemsTop: INavItem[] = [
  {
    order: 0,
    path: "home",
    label: "Home",
    icon: <FiHome />,
  },
  {
    order: 1,
    path: "dashboard",
    label: "Dashboard",
    icon: <FiBarChart2 />,
    subItems: [
      {
        order: 0,
        path: "analytics",
        label: "Analytics",
      },
      {
        order: 1,
        path: "apps",
        label: "Apps",
      },
      {
        order: 2,
        path: "learn",
        label: "Learn",
      },
    ],
  },
  {
    order: 2,
    path: "projects",
    label: "Projects",
    icon: <FiLayers />,
  },
  {
    order: 3,
    path: "tasks",
    label: "Tasks",
    icon: <FiCheckSquare />,
  },
  {
    order: 4,
    path: "reporting",
    label: "Reporting",
    icon: <FiFlag />,
  },
  {
    order: 5,
    path: "rentals",
    label: "Rentals",
    icon: <FiMapPin />,
    subItems: [
      {
        order: 0,
        path: "all",
        label: "All rentals",
      },
      {
        order: 1,
        path: "popular",
        label: "Popular",
      },
      {
        order: 2,
        path: "recent",
        label: "Recently added",
      },
    ],
  },
];

export const navItemsBottom: INavItem[] = [
  {
    order: 0,
    path: "settings",
    label: "Settings",
    icon: <FiSettings />,
  },
  {
    order: 1,
    label: "Close Navbar",
    icon: <FiArrowLeft />,
    toggleSidebar: true,
  },
];
