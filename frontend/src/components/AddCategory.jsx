import React, { useState } from 'react';
import { MdClose } from "react-icons/md";

const AddCategory = ({ addCategory, onClose }) => {
  const [categoryText, setCategoryText] = useState("");

  const handleAddCategory = (event) => {
    event.preventDefault(); 
    addCategory(categoryText);
    setCategoryText("");
  };

  return (
    <div className="add-category-form">
      <h2>Nueva categoria</h2>
      <form>
        <input 
          placeholder="categoria..." 
          type="text" 
          value={categoryText}
          onChange={(e) => setCategoryText(e.target.value)}
        />
        <button onClick={(event) => handleAddCategory(event)}>agregar</button>
        <MdClose 
          size="2em" 
          className='close-addcategory'
          onClick={() => onClose()}
        />
      </form>
    </div>
  );
}

export default AddCategory;
