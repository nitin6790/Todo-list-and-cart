// // Create a new task
// app.post('/api/tasks', async (req, res) => {
//     try {
//       const { title } = req.body;
//       const task = new Task({ title, completed: false });
//       await task.save();
//       res.status(201).json(task);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  
//   // Get all tasks
//   app.get('/api/tasks', async (req, res) => {
//     try {
//       const tasks = await Task.find();
//       res.json(tasks);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  
//   // Delete a task
//   app.delete('/api/tasks/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       await Task.findByIdAndDelete(id);
//       res.json({ message: 'Task deleted' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  