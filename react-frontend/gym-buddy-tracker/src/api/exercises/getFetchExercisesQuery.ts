import fetchExercises from "./fetchExercises";

const getFetchExercisesQuery = () => {
  return {
    queryFn: fetchExercises,
    queryKey: ["exercises"],
  };
};

export default getFetchExercisesQuery;
