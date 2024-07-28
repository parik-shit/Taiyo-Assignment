import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { deleteContact } from "../../../redux/slices/contactSlice";

interface ContactListProps {
  setIsEditing: (isEditing: boolean) => void;
  setCurrentContact: (contact: any) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  setIsEditing,
  setCurrentContact,
}) => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const dispatch = useDispatch();

  const handleEdit = (contact: any) => {
    setCurrentContact(contact);
    setIsEditing(true);
  };

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id} // Ensure the contact.id is unique
          className="bg-gray-700 p-4 rounded-md shadow-md flex justify-between items-center"
        >
          <p className="text-white">
            {contact.firstName} {contact.lastName} - {contact.status}
          </p>
          <div className="space-x-2">
            <button
              onClick={() => handleEdit(contact)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

