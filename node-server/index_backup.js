const express = require("express");
const cors = require("cors");

// Middleware to log each request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass to the next middleware or route
  });
  
// Example of custom error handling middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something went wrong!');
});


const app = express();
app.use(cors());
app.use(express.json());

let todos = [];


app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
});

app.get("/api/todos", (req, res) => {
    res.json(todos);
});

app.post("/api/todos", (req, res) => {
    const newTodo = { id: Date.now(), text: req.body.text};
    todos.push(newTodo);
    res.json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id)
    todos = todos.filter(todo => todo.id !== todoId)
    res.json({massage: `Todo with id ${todoId} deleted`})

});



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
