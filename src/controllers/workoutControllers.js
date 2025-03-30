const workoutServices = require('../services/workoutService.js');



const getAllWorkouts = async (req, res) => {
    try {
        const allWorkouts = await workoutServices.getAllWorkouts();
        res.status(200).send({ status: "OK", data: allWorkouts });
        
    } catch (error) {
        res.status(500).send({ status: "ERROR", message: error.message });
    }
};

const getOneWorkout = async (req, res) => {
    try {
        const workout = await workoutServices.getOneWorkout(req.params.workoutId);
        res.status(200).send({ status: "OK", data: 'workout '+ workout });
    } catch (error) {
        res.status(500).send({ status: "ERROR", message: error.message });
    }
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

const updateWorkout = async (req, res) => {
    try {
        const updatedWorkout = await workoutServices.updateWorkout(req.params.workoutId, req.body);
        res.status(200).send({ status: "OK", data: updatedWorkout });
    } catch (error) {
        res.status(500).send({ status: "ERROR", message: error.message });
    }
};

const deleteWorkout = async (req, res) => {
    try {
        const deletedWorkout = await workoutServices.deleteWorkout(req.params.workoutId);
        res.status(200).send({ status: "OK", data: deletedWorkout });
    } catch (error) {
        res.status(500).send({ status: "ERROR", message: error.message });
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};