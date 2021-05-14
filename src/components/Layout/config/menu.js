/*
 * @Author: your name
 * @Date: 2021-04-26 09:59:35
 * @LastEditTime: 2021-04-30 17:37:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chat-app/src/components/Layout/config/menu.js
 */
import React from 'react';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PieChartOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  BoxPlotOutlined,
  FundOutlined,
  SlidersOutlined,
  DiffOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
 const menu = [
  {
    title: "Subnav 1",
    key: "subnav1",
    path: "/subnav1",
    icon: <UserOutlined />,
    children: [
      {
        title: "Tabs",
        key: "tabs",
        path: "/tabs",
        icon: <AreaChartOutlined />,
      },
      {
        title: "Input",
        key: "input",
        path: "/input",
        icon: <PieChartOutlined />,
      },
      {
        title: "Select",
        key: "select",
        path: "/select",
        icon: <BarChartOutlined />,
      },
      {
        title: "Route",
        key: "route",
        path: "/route",
        icon: <LogoutOutlined />,
      },
    ],
  },
  {
    title: "Subnav 2",
    key: "subnav2",
    path: "/subnav2",
    icon: <LaptopOutlined />,
    children: [
      {
        title: "React Form",
        key: "rc/form",
        path: "/rc/form",
        icon: <DotChartOutlined />,
      },
      {
        title: "Tag",
        key: "tag",
        path: "/tag",
        icon: <DotChartOutlined />,
      },
      {
        title: "List",
        key: "list",
        path: "/list",
        icon: <LineChartOutlined />,
      },
      {
        title: "Card",
        key: "card",
        path: "/card",
        icon: <RadarChartOutlined />,
      },
    ],
  },
  {
    title: "Subnav 3",
    key: "subnav3",
    path: "/subnav3",
    icon: <NotificationOutlined />,
    children: [
      {
        title: "Form",
        key: "form",
        path: "/form",
        icon: <HeatMapOutlined />,
      },
      {
        title: "Modal",
        key: "modal",
        path: "/modal",
        icon: <BoxPlotOutlined />,
      },
      {
        title: "Progress",
        key: "progress",
        path: "/progress",
        icon: <FundOutlined />,
      },
    ],
  },
  {
    title: "Table",
    key: "table",
    path: "/table",
    icon: <SlidersOutlined />,
  },
  {
    title: "Chat",
    key: "chat",
    path: "/chat",
    icon: <DiffOutlined />,
  },
];
export default menu;