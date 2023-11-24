import React, { useState } from "react";

function Add({ note, setNote }) {
  const [newNote, setNewNote] = useState({
    title: "",
    createdAt: +new Date(),
    body: "",
    archived: false,
  });
  const maxTitleLength = 50;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title" && value.length > maxTitleLength) {
      return;
    }
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.title.trim() === "" || newNote.body.trim() === "") {
      return;
    }
    const noteToAdd = {
      id: +new Date(),
      title: newNote.title,
      createdAt: new Date().toDateString(),
      body: newNote.body,
      archived: false,
    };

    setNote([...note, noteToAdd]);
    setNewNote({ title: "", createdAt: +new Date().toDateString(), body: "" });
  };

  const remainingCharacters = maxTitleLength - newNote.title.length;

  return (
    <div className="note-app__body">
      <h2>make a note</h2>
      <form onSubmit={handleAddNote} className="note-input">
        <input
          type="text"
          name="title"
          placeholder="title goes here"
          value={newNote.title}
          onChange={handleInputChange}
        />
        <p>{remainingCharacters} remaining</p>
        <textarea
          name="body"
          placeholder="write your note"
          value={newNote.body}
          onChange={handleInputChange}
        />
        <button type="submit">add note</button>
      </form>
    </div>
  );
}

export default Add;
