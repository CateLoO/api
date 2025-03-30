const DB = require('./db.json');
const {saveToDatabase} = require('./utils.js');

const getAllWorkout = () => {  
  return DB.workouts;
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

module.exports = {
    getAllWorkout,
    createNewWorkout
    };