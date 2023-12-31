import React, { useState } from "react";
import Add from "./Add";
import Navbar from "./Navbar";
import { getInitialData, showFormattedDate } from "../utils";

function Box({ handleAddNote }) {
  const [note, setNote] = useState(getInitialData());
  const [archivedNotes, setArchivedNotes] = useState([]);

  const handleSetNote = (prev) => {
    setNote(prev);
  };

  console.log(note);

  const handleDelete = (id) => {
    const updateNote = note.filter((note) => note.id !== id);
    const updateArchivedNotes = archivedNotes.filter((note) => note.id !== id);

    setNote(updateNote);
    setArchivedNotes(updateArchivedNotes);
  };

  const handleArchive = (id) => {
    const updatedNote = note.map((n) => {
      if (n.id === id) {
        return { ...n, archive: true };
      }
      return n;
    });

    const archivedNote = updatedNote.find((n) => n.id === id);

    if (archivedNote) {
      setNote(updatedNote.filter((n) => n.id !== id));
      setArchivedNotes([...archivedNotes, archivedNote]);
    }
  };

  const handleUnarchive = (id) => {
    const unarchivedNote = archivedNotes.find((n) => n.id === id);

    if (unarchivedNote) {
      setNote([...note, unarchivedNote]);
      setArchivedNotes(archivedNotes.filter((n) => n.id !== id));
    }
  };

  return (
    <div>
      <Navbar note={note} setNote={setNote} />
      <div className="">
        <Add note={note} setNote={handleSetNote} />
        <h1 className="title-up">Notes</h1>
        {note.length === 0 ? (
          <h2 className="popup">No Notes</h2>
        ) : (
          <>
            <ul className="notes-list">
              {note.map((note, index) => (
                <li key={index} className="note-item">
                  <h3 className="note-item__title">{note.title}</h3>
                  <h2 className="note-item__date">
                    {showFormattedDate(new Date(note.createdAt))}
                  </h2>
                  <p className="note-item__body">{note.body}</p>

                  <div className="note-item__action">
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="note-item__delete-button"
                    >
                      delete
                    </button>
                    <button
                      onClick={() => handleArchive(note.id)}
                      className="note-item__archive-button"
                    >
                      archive
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div>
        <h1 className="title-up">Archived</h1>
        {archivedNotes.length === 0 ? (
          <h2 className="popup">No Notes</h2>
        ) : (
          <>
            <ul className="notes-list">
              {archivedNotes.map((note, index) => (
                <li key={index} className="note-item">
                  <h3 className="note-item__title">{note.title}</h3>
                  <h2 className="note-item__date">
                    {showFormattedDate(new Date(note.createdAt))}
                  </h2>
                  <p className="note-item__body">{note.body}</p>

                  <div className="note-item__action">
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="note-item__delete-button"
                    >
                      delete
                    </button>
                    <button
                      onClick={() => handleUnarchive(note.id)}
                      className="note-item__archive-button"
                    >
                      unarchive
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Box;
