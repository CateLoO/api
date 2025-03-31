const DB = require('./db.json');
const { saveToDatabase } = require('./utils.js');

const getAllWorkout = () => {  
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find(workout => workout.id === (workoutId));
  return workout;
};
 

const createNewWorkout = (newWorkout) => {

  const isAlreadyExist = DB.workouts.findIndex(
    (workout => workout.name === newWorkout.name)) > -1;
  if (isAlreadyExist){
    return;
  }
    
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
    const indexForUpdate = DB.workouts.findIndex(
      (workout => workout.id === workoutId)
    );
    if (indexForUpdate === -1) {
        return;
    }

    const workoutToUpdate = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    };
  

  DB.workouts[indexForUpdate] =  workoutToUpdate;
    saveToDatabase(DB);
    return updateOneWorkout ;
};

const deleteOneWorkout = (workoutId) => {
  const indexForDelete = DB.workouts.findIndex(
    (workout => workout.id === workoutId)
  );
  if (indexForDelete === -1) {
    return;
  }
  DB.workouts.splice(indexForDelete, 1);
  saveToDatabase(DB);
  return;
}
module.exports = {
    getAllWorkout,
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout,
    deleteOneWorkout,
    };