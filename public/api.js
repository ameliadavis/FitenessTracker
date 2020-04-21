const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
      console.log("api.js - get last workout" + res)
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    

    return json[json.length - 1];// this is a little strange in real world since it runs through whole database before returning only the last entry
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
