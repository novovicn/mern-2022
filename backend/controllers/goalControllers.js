const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) =>
  res.json({ msg: 'Get goals' })
);
const addGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please enter goal!');
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
