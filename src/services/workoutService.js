const DB = require('../database/db.json'); 
const Workout = require('../database/Workout.js'); 
const {v4: uuidv4} = require('uuid');

const getAllWorkouts =() => {
    // Logic to get all workouts from the database
    const allWorkouts = Workout.getAllWorkout();

    return allWorkouts;
};

const getOneWorkout = (workoutId) => {
    // Logic to get one workout by ID from the database

    const workout = Workout.getOneWorkout(workoutId);
 
    return workout;
};

const createNewWorkout = (newWorkout) => {
    // Logic to create a new workout in the database
    const workoutToInsert = {
        id: uuidv4(),
        name: newWorkout.name,
        mode: newWorkout.mode,
        equipment: newWorkout.equipment,
        exercises: newWorkout.exercises,
        trainerTips: newWorkout.trainerTips,
        createAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
        updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    };
    //
    console.log('workoutToInsert', workoutToInsert);

    const createWorkout = Workout.createNewWorkout(workoutToInsert);

    
    if (createWorkout === undefined) {
        return {status: "ERROR", message: "Workout already exists"};
    } else {
        return {status: "OK", data: createWorkout};
    }
    return;

};

const updateOneWorkout = ( workoutId, changes) => {
    // Logic to update an existing workout in the database
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
    // Logic to delete a workout from the database
    const deletedWorkout = Workout.deleteOneWorkout(workoutId);

    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
