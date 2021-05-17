import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import EditIcon from "@material-ui/icons/Edit";

export const SidebarOptions = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "view Profile",
    icon: <PersonIcon />,
    link: "/view",
  },
  {
    title: "Edit profile",
    icon: <EditIcon />,
    link: "/edit",
  },
];
