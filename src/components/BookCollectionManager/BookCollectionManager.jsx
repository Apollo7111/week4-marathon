import React, { useState } from "react";
import Book from "./Book";
import "./BookCollectionManager.css";

const emptyForm = {
  title: "",
  author: "",
  genre: "",
  language: "",
  edition: "",
  pages: "",
  rating: "",
  year: "",
};

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState(emptyForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function addBook(event) {
    event.preventDefault();

    if (form.title.trim() === "" || form.author.trim() === "") {
      return;
    }

    setBooks((prev) => [...prev, form]);
    setForm(emptyForm);
  }

  function deleteBook(index) {
    setBooks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="app-container">
      <h1>Book Collection Manager</h1>

      <form className="input-section" onSubmit={addBook}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="language"
          placeholder="Language"
          value={form.language}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="edition"
          placeholder="Edition"
          value={form.edition}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="pages"
          placeholder="Pages"
          value={form.pages}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="rating"
          step="0.1"
          placeholder="Rating"
          value={form.rating}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={form.year}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="add-button">
          Add Book
        </button>
      </form>

      <div className="books-section">
        <h2>Your Books ({books.length})</h2>
        {books.length === 0 ? (
          <p className="empty-message">No books yet. Add one to get started.</p>
        ) : (
          <ol className="books-list">
            {books.map((book, index) => (
              <Book
                key={index}
                title={book.title}
                author={book.author}
                genre={book.genre}
                language={book.language}
                edition={book.edition}
                pages={book.pages}
                rating={book.rating}
                year={book.year}
                onDelete={() => deleteBook(index)}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default BookCollectionManager;
