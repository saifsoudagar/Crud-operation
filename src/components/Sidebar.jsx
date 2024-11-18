import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const Sidebar = ({
  notes,
  selectedNoteId,
  setSelectedNoteId,
  addNote,
  deleteNote,
  searchQuery,
  updateSearchQuery,
  isSidebarVisible,
  toggleSidebar,
}) => {
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`md:w-64 lg:w-64 h-screen w-0 bg-[#212121] border-r border-gray-600 text-white flex flex-col transition-transform duration-300 ${
        isSidebarVisible ? "block" : "hidden"
      } sm:block`}
    >

      <div className="p-4 h-12  border-b border-gray-600 flex justify-between items-center">
        <h2 className="text-[16px] font-medium ">All Notes</h2>
        <FiEdit onClick={addNote} />
      </div>

  
      <div className="p-4 border-b border-gray-600 flex items-center">
        <IoIosSearch />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => updateSearchQuery(e.target.value)}
          placeholder="Search all notes and tags"
          className="w-full p-2 rounded bg-transparent text-white text-sm outline-none"
        />
      </div>

   
      <ul className="flex-1 overflow-y-auto">
        {filteredNotes.map((note) => (
          <li
            key={note.id}
            className={`p-4 cursor-pointer flex justify-between border-b items-center font-semibold border-gray-600 ${
              note.id === selectedNoteId
                ? "bg-[#3361cc] text-white"
                : "hover:bg-[#333333]"
            }`}
            onClick={() => setSelectedNoteId(note.id)}
          >
            <span>{note.text || "Untitled Note"}</span>
            <MdDeleteOutline
              onClick={(e) => {
                e.stopPropagation();
                deleteNote(note.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
