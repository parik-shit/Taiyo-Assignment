import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addContact,
  editContact,
} from "../../redux/slices/contactSlice";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const ContactPage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState<any>(null);

  const handleSaveContact = (contact: any) => {
    if (currentContact) {
      dispatch(editContact(contact));
    } else {
      dispatch(addContact(contact));
    }
    setIsEditing(false);
    setCurrentContact(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
      <div className="p-6 w-full max-w-md">
        {!contacts.length && !isEditing ? (
          <div className="text-center">
            <h2 className="text-lg mb-4">No Contact Found</h2>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Create Contact
            </button>
          </div>
        ) : isEditing ? (
          <ContactForm
            contact={currentContact}
            onSave={handleSaveContact}
            onCancel={() => {
              setIsEditing(false);
              setCurrentContact(null);
            }}
          />
        ) : (
          <>
            <div className="text-center mb-4">
              <button
                onClick={() => {
                  setCurrentContact(null);
                  setIsEditing(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Create Contact
              </button>
            </div>
            <ContactList
              setIsEditing={setIsEditing}
              setCurrentContact={setCurrentContact}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ContactPage;

