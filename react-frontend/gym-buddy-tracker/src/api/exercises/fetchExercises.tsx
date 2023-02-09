const fetchExercises = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/exercises");
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchExercises;
