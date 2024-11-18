import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Header from "../components/Header";

const Notes = () => {
  const [notes, setNotes] = useState([{ id: 1, text: "" }]);
  const [selectedNoteId, setSelectedNoteId] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); 

  // Add  note
  const addNote = () => {
    const newNote = { id: Date.now(), text: "" };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setSelectedNoteId(newNote.id);
  };

  // Delete 
  const deleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  const handleNoteChange = (text) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === selectedNoteId ? { ...note, text } : note
      )
    );
  };

  return (
    <div className="h-screen flex bg-[#212121] text-white">

      <div
        className={`transform transition-transform duration-300 bg-[#212121] border-r border-gray-600 ${
          isSidebarVisible ? "w-64" : "w-0"
        }`}
      >
        {isSidebarVisible && (
          <Sidebar
            notes={notes}
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            addNote={addNote}
            deleteNote={deleteNote}
            searchQuery={searchQuery} 
            updateSearchQuery={setSearchQuery} 
          />
        )}
      </div>

     
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarVisible ? "ml-0" : "w-full"
        }`}
      >
        <Header
          toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} // Toggle sidebar visibility
          handleInsertCheckbox={() =>
            setNotes((prevNotes) =>
              prevNotes.map((note) =>
                note.id === selectedNoteId
                  ? { ...note, text: `☐ ${note.text}` }
                  : note
              )
            )
          }
        />
        {selectedNoteId && (
          <Editor
            noteText={
              notes.find((note) => note.id === selectedNoteId)?.text || ""
            }
            handleNoteChange={handleNoteChange}
          />
        )}
      </div>
    </div>
  );
};

export default Notes;
