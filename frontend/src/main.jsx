import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const deleteCategories = async () => {
    try {
      const res = await fetch(`http://localhost:4000/categories/all`, {
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

await deleteCategories();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>,
)