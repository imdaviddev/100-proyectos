import { useState } from "react";
import CategoriesList from "./CategoriesList";
import { MdClose } from "react-icons/md";

const AddNote = ({ handleAddNote, categories }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const [noteCategory, setNoteCategory] = useState(null);
  const [showCategories, setShowCategories] = useState(false);

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      setNoteCategory("");
    }
  };

  const handleChooseCategory = (name) => {
	setNoteCategory(name)
	setShowCategories(false)
	}

  return (
    <>
      <div className="note new">
        <textarea
          rows="7"
          cols="10"
          placeholder="Type to add a note..."
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div className="note-footer">
          <small>{characterLimit - noteText.length} Remaining</small>
          <div className="options">
            <button className="save" onClick={handleSaveClick}>
              Guardar
            </button>
            <button className="choose-category" onClick={() => setShowCategories(true)}>
				{noteCategory ? noteCategory : "Categoria"}
			</button>
          </div>
        </div>
      </div>
	  {
		showCategories ? 
		<div className="categories-list-wrapper">
        <div className="categories-list-add">
          <h2>Elegir categoria</h2>
          <ul>
		  	<div className="category none" onClick={() => handleChooseCategory(null)}>
                Sin categoria
            </div>
            {categories.map((c) => (
              <div key={c.id} className="category"
			   onClick={() => handleChooseCategory(c.name)}>
                {c.name}
              </div>
            ))}
          </ul>
		  <MdClose 
          size="2em" 
          className='close-addcategory'
		  onClick={() => setShowCategories(false)}
          />
        </div>
      </div>: ""
	  }

    </>
  );
};

export default AddNote;
