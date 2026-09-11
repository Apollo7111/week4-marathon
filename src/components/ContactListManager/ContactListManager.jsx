
import React, { useState } from "react";
import Contact from "./Contact";
import "./ContactListManager.css";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJob] = useState("");
  const [birthday, setBirthday] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState("");
  const [favourite, setFavourite] = useState(false);

  const [errorMessage, setErrorMessage] = useState(""); //error state


  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Add a new contact
  function addContact(event) {
    event.preventDefault();

    // error is fields for name and email are empty
    if (
      name.trim() === "" ||
      email.trim() === ""
    ) {
      setErrorMessage(
        "Please fill in at least name and email."  //error message text
      );
      return;
    }

    setErrorMessage("");

    const newContact = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      jobTitle: jobTitle.trim(),
      birthday,
      notes: notes.trim(),
      website: website.trim(),
      favourite,
    };

    setContacts((currentContacts) => [
      ...currentContacts,
      newContact,
    ]);

    // Clear input fields
    setName("");
    setEmail("");
    setPhone("");
    setJob("");
    setBirthday("");
    setNotes("");
    setWebsite("");
    setFavourite(false);
  }

  // Delete a contact
  function deleteContact(index) {
    setContacts((currentContacts) =>
      currentContacts.filter((_, i) => i !== index)
    );
  }

  //render 
  //all the functions were done in line so make the code cleaner

  return (
    <div className="app-container">
      <h1>Contact List Manager</h1>

      <form onSubmit={addContact} className="input-section">
        <input
          type="text"
          placeholder="Enter contact name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />

        <input
          type="email"
          placeholder="Enter email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <input
          type="tel"
          placeholder="Add phone number..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJob(e.target.value)}
          className="input-field"
        />

        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="input-field"
        />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="input-field"
        />

        <input
          type="url"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="input-field"
        />

        <label>
          <input
            type="checkbox"
            checked={favourite}
            onChange={(e) => setFavourite(e.target.checked)}
          />

          <span style={{ marginLeft: "10px" }}>
            Favourite ⭐
          </span>
        </label>


    {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
    {/*Button*/}

    
        <button
          type="submit"
          className="add-button"
        >
          Add Contact
        </button>

    {/*error display*/}
    
        {errorMessage && (
          <p className="error-message">
            {errorMessage}
          </p>
        )}
      </form>

      <div className="contacts-section">
        <h2>Your Contacts ({contacts.length})</h2>

        {contacts.length === 0 ? (
          <p className="empty-message">
            No contacts yet. Add one to get started!
          </p>
        ) : (
          <ol className="contacts-list">
            {contacts.map((contact, index) => (
              <Contact
                key={index}
                contact={contact}
                onDelete={() => deleteContact(index)}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ContactListManager;

