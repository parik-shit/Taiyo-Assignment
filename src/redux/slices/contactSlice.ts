import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
//nanoid dependency is being used to generate a unique id for each contact
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}
//each object in the contacts array will be of type "Contact"
interface ContactState {
  contacts: Contact[];
}
//setting the initial state of the contacts as empty array
const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  //adding 3 reducer functions here, these will be used to mutate the state that is stored in the redux store
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const contact = { ...action.payload, id: nanoid() }; // Ensure unique ID
      state.contacts.push(contact);
    },
    //receiving the whole payload that is to be edited and changing the state of that particlular object in the state of redux store
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;

