import React, { useState, useEffect } from "react";
import { PiNotepadFill, PiTagFill } from "react-icons/pi";
import { FaArchive } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import AddCategory from "./AddCategory";

const FilterOptions = ({
  archivedFilter,
  handleFilterArchived,
  filterCategory,
  handleFilterCategory,
  categories,
  addCategory,
}) => {
  const [showOptions, setShowoptions] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  useEffect(() => {}, [categories, filterCategory]);

  const handleFilterTag = (name) => {
    handleFilterCategory(name)
    setShowoptions(false)
  }

  return (
    <>
      <div className="filter-options">
        <div className="options-notes">
          <div
            className={`option-filter ${archivedFilter ? "" : "active-filter"}`}
            onClick={() => handleFilterArchived(false)}
          >
            <PiNotepadFill className="filter-icon" size="3.2em" />
            <small>Notas Activas</small>
          </div>
          <div
            className={`option-filter ${archivedFilter ? "active-filter" : ""}`}
            onClick={() => handleFilterArchived(true)}
          >
            <FaArchive className="filter-icon" size="3em" />
            <small>Notas Archivadas</small>
          </div>
        </div>
        <div className="options-categories">
          <div
            className={`category-button `.concat(showOptions? "open" : "")}
            onClick={() => setShowoptions(!showOptions)}
          >
            <span>
              <PiTagFill className="filter-category-icon" size="1.5em" />{" "}
              {filterCategory}
            </span>
          </div>
          {showOptions ? (
            <>
              <ul className="categories-list">
                <div className="category-option" onClick={() => handleFilterTag("")}>
                    sin categoria
                </div>
                {categories.map((c) => (
                  <div
                    key={c.id}
                    className="category-option"
                    onClick={() => handleFilterTag(c.name)}
                  >
                    {c.name}
                  </div>
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
        {showCategoryForm ? (
          <div className="wrapper-addcategory">
            <AddCategory
              addCategory={addCategory}
              onClose={() => setShowCategoryForm(false)}
            />
          </div>
        ) : (
          ""
        )}
              <div className="add-category">
        {" "}
        <span>Agregar Categoria</span>
        <MdAdd
          className="add-category-icon"
          size="2.5em"
          onClick={() => setShowCategoryForm(true)}
        />
      </div>
      </div>
    </>
  );
};

export default FilterOptions;
