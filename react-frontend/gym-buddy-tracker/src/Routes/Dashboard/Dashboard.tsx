import { useState } from "react";
import { RootRoute, Route } from "@tanstack/react-router";
import App, { rootRoute } from "../../App";

const Dashboard = () => {
  return (
    <>
      <div> </div>
    </>
  );
};

export const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

export default Dashboard;
