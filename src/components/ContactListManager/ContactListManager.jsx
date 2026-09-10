import React, { useState } from "react";
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
  const [favourite, setFavourite] = useState("");

  // Handle input change for name
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Handle input change for email
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  //all the functions are written inline afterwards




  // Add a new contact to the list
  function addContact() {
  if (name.trim() !== "" && email.trim() !== "") {
    setContacts((c) => [
      ...c,
      {
        name,
        email,
        phone,
        jobTitle,
        birthday,
        notes,
        website,
        favourite,
      },
    ]);

    // Clear all input fields
    setName("");
    setEmail("");
    setPhone("");
    setJob("");
    setBirthday("");
    setNotes("");
    setWebsite("");
    setFavourite(false);
  }
}

  // Delete a contact from the list
  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className="app-container">
      <h1>Contact List Manager</h1>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter contact name..."
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Enter email address..."
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
         <input
          type="tel"
          placeholder="Add phone number..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)} //HANDLE PHONE
          className="input-field" 
        />
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJob(e.target.value)}  //HANDLE job
          className="input-field" 
        />
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}  //HANDLE BD
          className="input-field" 
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}  //HANDLE hnotes
          className="input-field" 
        />
        <input
          type="url"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}  //HANDLE Website
          className="input-field" 
        />
        <label>
          <input
          type="checkbox"
          checked={favourite}
          onChange={(e) =>setFavourite(e.target.checked)}
          />
          <span style={{marginLeft:"10px"}}>
          Favourite ⭐
          </span>
        </label>







        <button onClick={addContact} className="add-button">
          Add Contact
        </button>
      </div>

      <div className="contacts-section">
        <h2>Your Contacts ({contacts.length})</h2>
        {contacts.length === 0 ? (
          <p className="empty-message">No contacts yet. Add one to get started!</p>
        ) : (
          <ol className="contacts-list">
            {contacts.map((contact, index) => (
              <li key={index} className="contact-item">
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-email">{contact.email}</span>
                  <span className="contact-phone">{contact.phone}</span>
                  <span className="contact-jobTtitle">{contact.jobTitle}</span>
                  <span className="contact-birthday">{contact.birthday}</span>
                  <span className="contact-website">{contact.website}</span>
                  <span className="contact-notes">{contact.notes}</span>
                  <span className="contact-detail">Favourite: {contact.favourite ? "Yes" : "No"}</span>
                </div>
                <button
                  onClick={() => deleteContact(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ContactListManager;