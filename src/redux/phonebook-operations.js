import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://61fe9f99a58a4e00173c992b.mockapi.io";

const contactsAsyncFetch = createAsyncThunk(
  "contacts/contactsAsyncFetch",
  async () => {
    contactsAsyncFetch.pending();
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      contactsAsyncFetch.rejected(error);
    }
  }
);

const contactAdd = createAsyncThunk("contacts/contactAdd", async contact => {
  contactAdd.pending();
  try {
    const { data } = await axios.post("/contacts", contact);
    return data;
  } catch (error) {
    contactAdd.rejected(error);
  }
});

const contactDelite = createAsyncThunk("contacts/contactDelite", async (id) => {
  contactDelite.pending();
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    contactDelite.rejected(error);
  }
});

export { contactsAsyncFetch, contactAdd, contactDelite };
