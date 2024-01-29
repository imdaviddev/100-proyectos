import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote, categories }) => {
  return (
    <div className="wrapper-list">
      <div className="notes-list">
	  	<AddNote handleAddNote={handleAddNote} categories={categories}/>
        {
		notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            archived={note.archived}
            handleDeleteNote={handleDeleteNote}
            handleEditNote={handleEditNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
