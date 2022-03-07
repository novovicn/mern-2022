const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
});

const addGoal = asyncHandler(async (req, res) => {
  const text = req.body.text;
  if (!text) {
    res.status(400);
    throw new Error('Please enter goal!');
  }

  try {
    const goal = await Goal.create({text});
    res.status(201).json(goal);
  } catch (error) {
    throw new Error('Invalid data!');
  }
  

  res.json({ msg: 'Add a goal' });
});

const updateGoal = asyncHandler(async (req, res) =>
  res.json({ msg: `Update goal ${req.params.id}` })
);

const deleteGoal = asyncHandler(async (req, res) =>
  res.json({ msg: `Delete goal ${req.params.id}` })
);

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
