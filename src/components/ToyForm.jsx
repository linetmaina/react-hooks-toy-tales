import React, { useState } from "react";

function ToyForm({ addToy }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addToy(form);
    setForm({ name: "", image: "" });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>

        <input
          name="name"
          placeholder="Enter a toy's name..."
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Enter a toy's image URL..."
          value={form.image}
          onChange={handleChange}
        />

        <input type="submit" value="Create New Toy" />
      </form>
    </div>
  );
}

export default ToyForm;