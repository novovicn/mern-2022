const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

const getGoals = asyncHandler(async (req, res) => {

  const goals = await Goal.find({ user: req.userId });
  res.status(200).json(goals);
});

const addGoal = asyncHandler(async (req, res) => {
  const text = req.body.text;
  if (!text) {
    res.status(400);
    throw new Error('Please enter goal!');
  }

  try {
    const goal = await Goal.create({ user: req.userId, text });
    res.status(201).json(goal);
  } catch (error) {
    throw new Error('Invalid data!');
  }
});

const updateGoal = asyncHandler(async (req, res) => {
  
  const goal = await Goal.findById(req.params.id);

  if (goal) {
    if(goal.user != req.userId){
      res.status(401)
      throw new Error('Users can update only their goals');
    }
    goal.text = req.body.text;
    const updatedGoal = await goal.save();
    res.json(updatedGoal);
  } else {
    res.status(404);
    throw new Error('Goal not found');
  }
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (goal) {
    if(goal.user != req.userId){
      res.status(401)
      throw new Error('Users can delete only their goals');
    }
    await goal.remove();
    res.json('Goal removed!');
  } else {
    res.status(404);
    throw new Error('Goal not found');
  }
});

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
