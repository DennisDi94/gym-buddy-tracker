import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Route } from "@tanstack/react-router";
import getFetchExercisesQuery from "../../api/exercises/getFetchExercisesQuery";
import { rootRoute } from "../../App";
import TExercise from "../../types/TExercise";

const Exercises = () => {
  const { data: exercises, status } = useQuery(getFetchExercisesQuery());

  if (status === "loading") return <div>Loading...</div>;

  return (
    <>
      <div>
        {" "}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Beschreibung</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises?.map((exercise: TExercise) => (
                <TableRow
                  key={exercise.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {exercise.name}
                  </TableCell>
                  <TableCell align="right">{exercise.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>{" "}
      </div>
    </>
  );
};

export const exercisesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/exercises",
  component: Exercises,
});

export default Exercises;
