
import React from "react";

function Contact({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <span className="contact-name">
          {contact.name}
        </span>

        <span className="contact-email">
          {contact.email}
        </span>

        <span className="contact-phone">
          {contact.phone}
        </span>

        {contact.jobTitle && (
          <span className="contact-jobTitle">
            {contact.jobTitle}
          </span>
        )}

        {contact.birthday && (
          <span className="contact-birthday">
            Birthday: {contact.birthday}
          </span>
        )}

        {contact.website && (
          <span className="contact-website">
            {contact.website}
          </span>
        )}

        {contact.notes && (
          <span className="contact-notes">
            {contact.notes}
          </span>
        )}

        <span className="contact-detail">
          Favourite: {contact.favourite ? "⭐" : "No"}
        </span>
      </div>

      <button
        type="button"
        onClick={onDelete}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;

