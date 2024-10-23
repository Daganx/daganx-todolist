import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/signup", { username, password });
      console.log(response.data);
      // Gérer la réponse (par exemple, rediriger l'utilisateur ou afficher un message de succès)
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      // Gérer l'erreur (par exemple, afficher un message d'erreur à l'utilisateur)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom d'utilisateur"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </>
  );
}

export default App;
