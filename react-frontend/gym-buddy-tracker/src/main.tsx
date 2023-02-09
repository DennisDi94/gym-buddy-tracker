import { ReactRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { rootRoute } from "./App";
import "./index.css";
import { dashboardRoute } from "./Routes/Dashboard/Dashboard";
import { exercisesRoute } from "./Routes/Exercise/Exercises";
import { workoutsRoute } from "./Routes/Workout/Workouts";

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  workoutsRoute,
  exercisesRoute,
]);
const router = new ReactRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
