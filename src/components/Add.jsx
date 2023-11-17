import React, { useState } from 'react'

function Add({note, setNote}) {
    const [notes, setNotes] = useState(note)
    const [newNote, setNewNote] = useState({title: '',createdAt: +new Date(), body: '', archived: false})
    const maxTitleLength = 50

    // console.log(note);
    console.log(notes);
    // console.log(newNote);
    // console.log(setNote);

    const handleInputChange = (e) => {
        const {name, value} = e.target
        if (name === 'title' && value.length > maxTitleLength) {
            return
        }
        setNewNote((prevNote) => ({...prevNote, [name]: value}))
    }

    const handleAddNote = (e) => {
        e.preventDefault()
        if (newNote.title.trim() === '' || newNote.body.trim() === '') {
            return
        }
        const noteToAdd = {
            id: note.length + 1,
            title: newNote.title,
            createdAt: new Date(),
            body: newNote.body,
            archived: false
        }

        // setObject((prevState) => ({
        //     ...prevState,
        //     secondKey: 'value',
        //   }));

        // console.log(...note);
        // console.log(newNote);

        setNotes([...note, noteToAdd])
        setNote([...note, noteToAdd])
        // setNote([...previous, noteToAdd])
        // setNote(prevState => ({
        //     ...prevState, noteToAdd,
        // }))
        setNewNote({title: '',createdAt: +new Date(), body: ''})

        // console.log(noteToAdd);

    }

    // itu perlu di pahami mbak
    // oke makasi mas


    const remainingCharacters = maxTitleLength - newNote.title.length

  return (
    <div className='note-app__body'>
        <h2>make a note</h2>
        <form onSubmit={handleAddNote} className='note-input'>
            <input type="text" name="title" placeholder='title goes here' value={newNote.title} onChange={handleInputChange} />
            <p>{remainingCharacters} remaining</p>
            <textarea name="body" placeholder='write your note' value={newNote.body} onChange={handleInputChange} />
            <button type='submit'>add note</button>
        </form>
    </div>
  )
}

export default Add