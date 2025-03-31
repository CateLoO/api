const { response } = require('express');
const workoutServices = require('../services/workoutService.js');



const getAllWorkouts = async (req, res) => {
    try {
        const allWorkouts = await workoutServices.getAllWorkouts();
        res.status(200).send({ status: "OK", data: allWorkouts });
        
    } catch (error) {
        res.status(500).send({ status: "ERROR", message: error.message });
    }
};

const getOneWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;
    
    if (!workoutId) {
        return;
    }
    const workout = workoutServices.getOneWorkout(workoutId);
    res.send({ status: "OK", data: workout });
};

const createWorkout = async (req, res) => {
    try {
        const{body} = req;
        if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
            return res.status(400).send({ status: "ERROR", message: "No workout data provided" });
        }

        const newWorkout = {
            name: body.name,
            mode: body.mode,
            equipment: body.equipment,
            exercises: body.exercises,
            trainerTips: body.trainerTips
        };
        const createdWorkout = await workoutServices.createNewWorkout(newWorkout);
        res.status(201).send({ status: "OK", data: createdWorkout });

    } catch (error) {
        res.status(500).send({ status: "ERROR", message: error.message });
    }
};

const updateOneWorkout =  (req, res) => {
  const {
    params: { workoutId },
    body,
  } = req;
  if (!workoutId) {
    return res.status(400).send({ status: "ERROR", message: "Workout ID is required" });
  }
  const workout = workoutServices.updateOneWorkout(workoutId, body);
  res.status(200).send({ status: "OK", data: workout });
};

const deleteWorkout = (req, res) => {
    const {
        params: { workoutId },
      } = req;
      if (!workoutId) {
        return res.status(400).send({ status: "ERROR", message: "Workout ID is required" });
      }
        const workout = workoutServices.deleteOneWorkout(workoutId);
        res.status(204).send({ status: "OK", data: workout });
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateOneWorkout,
    deleteWorkout
};