import React, { useState, useEffect, useRef } from "react";
import { MdDeleteForever, MdEdit, MdEditOff } from "react-icons/md";
import { FaArchive } from "react-icons/fa";

const Note = ({
  id,
  text,
  archived,
  handleDeleteNote,
  handleEditNote,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const textareaRef = useRef(null);
  const characterLimit = 200;

  useEffect(() => {
    if (editing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [editing]);

  const handleToggleEditing = () => {
    setEditing(!editing);
  };

  const handleTextChange = (event) => {
    if (event.target.value.length <= characterLimit) {
      setEditedText(event.target.value);
    }
  };

  const handleSaveEdit = () => {
    handleEditNote(id, editedText, archived);
    setEditing(false);
  };

  const handleArchiveClick = () => {
    handleEditNote(id, text, !archived);
  };

  return (
    <div className={`note ${editing ? "on-edit" : ""}`}>
      {editing ? (
        <textarea
          ref={textareaRef}
          value={editedText}
          onChange={handleTextChange}
          rows="8"
          cols="10"
          maxLength={characterLimit}
        />
      ) : (
        <span>{text}</span>
      )}
      <div className="note-footer">
        <div className="note-options">
          {editing ? (
            <div className="on-edit">
              <MdEditOff
                onClick={handleSaveEdit}
                className="note-icon edit-save-icon"
                size="1.3em"
              />

              <small>{characterLimit - editedText.length} Remaining</small>
            </div>
          ) : (
            <MdEdit
              onClick={handleToggleEditing}
              className="note-icon edit-icon"
              size="1.3em"
            />
          )}
          <FaArchive 
            onClick={handleArchiveClick}
            className={`note-icon `.concat(archived ? "archived-icon" : "archive-icon")}  
            size="1.2em"
          />
        </div>

        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="note-icon delete-icon"
          size="1.4em"
        />
      </div>
    </div>
  );
};

export default Note;
