import React, { useState } from 'react'

function Navbar({note, setNote}) {
    const [ searchQuery, setSearchQuery]  = useState('')

    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value)
    }

    function handleSearch(event) {
        event.preventDefault();

        const filteredNotes = note.filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setNote(filteredNotes)
    }
  return (
    <nav>
        <div className='note-app__header'>
            <img src="/images/skull.png" alt="" />
            <h1>mi nota</h1>
            <form onSubmit={handleSearch}>
            <input type="text" placeholder='search' value={searchQuery} onChange={handleSearchQueryChange} />
            </form>
        </div>
    </nav>
  )
}

export default Navbar