const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/usersRoutes");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost:27017/todolist-daganx", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion à MongoDB:", err));

// Utilisation des routes utilisateur
app.use("/api", userRoutes);

// Autres routes et configuration du serveur...

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

app.get("/", (req, res) => {
  res.send(
    `Serveur en cours d'exécution sur le port ${port}, Bonjour le monde (TODOLIST-BACKEND)`
  );
});

// // Route pour obtenir toutes les tâches
// app.get("/tasks", (req, res) => {
//   res.json(tasks);
// });
// // Route pour créer une tâche
// app.post("/tasks", (req, res) => {
//   const newTask = req.body;
//   newTask.id = id++;
//   tasks.push(newTask);
//   res.status(201).json(newTask);
// });
// // Route pour mettre à jour une tâche
// app.put("/tasks/:id", (req, res) => {
//   const taskId = parseInt(req.params.id);
//   const task = tasks.find((task) => task.id === taskId);
//   if (task) {
//     task.title = req.body.title || task.title;
//     task.completed =
//       req.body.completed !== undefined ? req.body.completed : task.completed;
//     res.json(task);
//   } else {
//     res.status(404).json({ message: "Tâche non trouvée" });
//   }
// });
// // Route pour supprimer une tâche
// app.delete("/tasks/:id", (req, res) => {
//   const taskId = parseInt(req.params.id);
//   tasks = tasks.filter((task) => task.id !== taskId);
//   res.status(204).send();
// });
