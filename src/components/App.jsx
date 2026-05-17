import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3000/toys";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((prev) => !prev);
  }

  // GET toys on load
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // POST toy
  function addToy(newToy) {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newToy, likes: 0 }),
    })
      .then((res) => res.json())
      .then((toy) => {
        setToys((prev) => [...prev, toy]);
      });
  }

  // DELETE toy
  function deleteToy(id) {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setToys((prev) => prev.filter((toy) => toy.id !== id));
    });
  }

  // PATCH likes
  function likeToy(toy) {
    fetch(`${API}/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        setToys((prev) =>
          prev.map((t) => (t.id === updatedToy.id ? updatedToy : t))
        );
      });
  }

  return (
    <>
      <Header />

      {showForm && <ToyForm addToy={addToy} />}

      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>

      <ToyContainer
        toys={toys}
        likeToy={likeToy}
        deleteToy={deleteToy}
      />
    </>
  );
}

export default App;