const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

router.get('/tasks', auth, async (req, res) => {
  try {
    await req.user.populate('tasks').execPopulate();
    res.send(req.user.tasks);
  } catch (error) {
    res.status(500).send();
  }
})

router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;