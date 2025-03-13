const express = require('express');
const router = express.Router();
const todoRouter = require('../models/todo.model');

// Create a new todo
router.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = new todo({
      title
    });
    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  const { title, completed } = req.body;
  try {
    let todo = await todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    todo.title = title;
    todo.completed = completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    await todo.remove();
    res.json({ msg: 'Todo removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = todoRouter;
