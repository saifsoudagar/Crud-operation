import React, { useEffect, useState } from "react";

const Editor = ({ noteText, handleNoteChange }) => {
  const [isPlaceholderActive, setIsPlaceholderActive] = useState(!noteText);
  const [tags, setTags] = useState([]); 
  const [tagInput, setTagInput] = useState(""); 

  useEffect(() => {
  
    setIsPlaceholderActive(!noteText);
  }, [noteText]);

  const handleInputChange = (value) => {
    setIsPlaceholderActive(false);
    handleNoteChange(value);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value); 
  };

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput.trim())) {
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput(""); 
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div className="flex flex-col flex-1 bg-[#212121] text-white">
      {/* Editor Text Area */}
      <textarea
        className={`flex-1 bg-[#212121] text-lg p-4 focus:outline-none resize-none ${
          isPlaceholderActive ? "text-gray-400" : "text-white"
        }`}
        placeholder="Start writing your notes..."
        value={isPlaceholderActive ? "" : noteText}
        onFocus={() => {
          if (isPlaceholderActive) {
            setIsPlaceholderActive(false);
          }
        }}
        onChange={(e) => handleInputChange(e.target.value)}
      ></textarea>

   
      <div className="p-4">
       
        <input
          type="text"
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddTag(); 
            }
          }}
          placeholder="Add tag..."
          className="w-full p-2 rounded bg-transparent text-white text-sm outline-none"
        />

    
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-700 text-sm text-white py-1 px-2 rounded"
            >
              <span>{tag}</span>
              <button
                onClick={() => handleDeleteTag(tag)}
                className="ml-2 text-xs text-red-400"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;
