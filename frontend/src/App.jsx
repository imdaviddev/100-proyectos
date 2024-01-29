import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import FilterOptions from "./components/FilterOptions";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const [archivedFilter, setArchivedFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [showCategoryForm, setShowCategoryForm] = useState(false);



  const getNotes = async () => {
    try {
      const res = await fetch("http://localhost:4000/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(`Error al obtener notas: ${res.status}`);
      }
      const data = await res.json();
      setNotes([...data]);
    } catch (error) {
      console.error("Error al obtener notas:", error);
    }
  };

  const addNote = async (text) => {
    try {
      const newNote = {
        text: text,
      };

      const res = await fetch("http://localhost:4000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (!res.ok) {
        throw new Error(`Error al guardar la nota: ${res.status}`);
      }

      await getNotes();
    } catch (error) {
      console.error("Error al agregar nota:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Error al eliminar la nota: ${res.status}`);
      }

      await getNotes();
    } catch (error) {
      console.error("Error al eliminar nota:", error);
    }
  };

  const updateNote = async (id, text, archived) => {
    try {
      const res = await fetch(`http://localhost:4000/notes/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          text: text,
          archived: archived,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Error al actualizar la nota: ${res.status}`);
      }

      await getNotes();
    } catch (error) {
      console.error("Error al actualizar la nota:", error);
    }
  };

  useEffect(() => {
    getNotes();
    getCategories();
    console.log(notes)
    console.log(categories)
  }, []);

  const getCategories = async () => {
    try {
      const res = await fetch("http://localhost:4000/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(`Error al obtener notas: ${res.status}`);
      }
      const data = await res.json();
      setCategories([...data]);
    } catch (error) {
      coCategorye.error("Error al obtener las categorias:", error);
    }
  }

  const addCategory = async (name) => {
    console.log(name);
    try {
      const newCategory = {
        name: name,
      };

      const res = await fetch("http://localhost:4000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });

      if (!res.ok) {
        throw new Error(`Error al guardar la categoria: ${res.status}`);
      }

      await getCategories();
    } catch (error) {
      console.error("Error al agregar la categoria:", error);
    }
  } 


  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <FilterOptions 
  archivedFilter={archivedFilter}
  handleFilterArchived={setArchivedFilter}

  filterCategory={filterCategory}
  handleFilterCategory={setFilterCategory}
  categories={categories}

  addCategory= {addCategory}
/>

        <NotesList
          notes={notes.filter((note) =>
            note?.text?.toLowerCase().includes(searchText) &&
            note?.archived == archivedFilter &&
            note?.category.toLowerCase() == filterCategory.toLocaleLowerCase() && filterCategory.length > 0
            )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={updateNote}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default App;
