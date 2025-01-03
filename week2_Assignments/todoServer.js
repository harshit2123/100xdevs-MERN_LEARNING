const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

let todos = [];

// Helper functions
function findIndex(arr, id) {
  return arr.findIndex((item) => item.id === id);
}

function removeIndex(arr, index) {
  return arr.filter((_, i) => i !== index);
}

// Routes
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    res.json(todos[todoIndex]);
  }
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 10000),
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex]);
  }
});

app.delete("/todos/:id", (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos = removeIndex(todos, todoIndex);
    res.status(200).send();
  }
});

app.use((req, res) => {
  res.status(404).send();
});

// Export app for testing
module.exports = app;

// Start server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
