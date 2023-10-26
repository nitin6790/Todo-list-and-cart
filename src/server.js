const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://nitin6790:<password>@cluster0.tfesksx.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a Task Schema and Model (models/Task.js)
const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

// Define your API routes here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Create a new task
app.post('/api/tasks', async (req, res) => {
    try {
      const { title } = req.body;
      const task = new Task({ title, completed: false });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Get all tasks
  app.get('/api/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Delete a task
  app.delete('/api/tasks/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndDelete(id);
      res.json({ message: 'Task deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
