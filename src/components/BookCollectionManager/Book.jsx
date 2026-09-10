import React from "react";

function Book({
  title,
  author,
  genre,
  language,
  edition,
  pages,
  rating,
  year,
  onDelete,
}) {
  return (
    <li className="book-item">
      <div className="book-info">
        <span className="book-title">{title}</span>
        <span className="book-author">by {author}</span>

        <dl className="book-details">
          <div>
            <dt>Genre</dt>
            <dd>{genre}</dd>
          </div>
          <div>
            <dt>Language</dt>
            <dd>{language}</dd>
          </div>
          <div>
            <dt>Edition</dt>
            <dd>{edition}</dd>
          </div>
          <div>
            <dt>Pages</dt>
            <dd>{pages}</dd>
          </div>
          <div>
            <dt>Rating</dt>
            <dd>{rating}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{year}</dd>
          </div>
        </dl>
      </div>

      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default Book;
