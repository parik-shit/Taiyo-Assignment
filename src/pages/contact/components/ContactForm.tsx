import React, { useState, useEffect } from "react";

interface ContactFormProps {
  contact: any;
  onSave: (contact: any) => void;
  onCancel: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  contact,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    status: "inactive",
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Status</label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="status"
            value="active"
            checked={formData.status === "active"}
            onChange={handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Active</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="status"
            value="inactive"
            checked={formData.status === "inactive"}
            onChange={handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Inactive</span>
        </label>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Save Contact
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

