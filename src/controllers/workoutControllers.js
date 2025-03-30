const workoutServices = require('../services/workoutServices');


const getAllWorkouts = (req, res) => {
    const allWorkoutes = workoutServices.getAllWorkouts();
    res.send(`<h1> Get all workouts ${req.params.workoutId}</h1>`);
}

const getOneWorkout = (req, res) => {
    const workout = workoutServices.getOneWorkout(req.params.workoutId);
    res.send(`<h1> Get workout ${req.params.workoutId}</h1>`);
}

const createWorkout = (req, res) => {
    const newWorkout = workoutServices.createWorkout(req.params.workoutId);
    res.send(`<h1> Create workout ${req.params.workoutId}</h1>`);
}

const updateWorkout = (req, res) => {
    const updatedWorkout = workoutServices.updateWorkout(req.params.workoutId);
    res.send(`<h1> Update workout ${req.params.workoutId}</h1>`);
}

const deleteWorkout = (req, res) => {
    const deletedWorkout = workoutServices.deleteWorkout(req.params.workoutId);
    res.send(`<h1> Delete workout ${req.params.workoutId}</h1>`);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}