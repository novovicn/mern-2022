

const getGoals = async (req, res) => res.json({ msg: 'Get goals' });
const addGoal = async (req, res) => res.json({ msg: 'Add a goal' });
const updateGoal = async (req, res) =>
  res.json({ msg: `Update goal ${req.params.id}` });
const deleteGoal = async (req, res) =>
  res.json({ msg: `Delete goal ${req.params.id}` });

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
