import { Route } from "@tanstack/react-router";
import { rootRoute } from "../../App";

const Workouts = () => {
  return (
    <>
      <div> </div>
    </>
  );
};

export const workoutsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/workouts",
  component: Workouts,
});

export default Workouts;
