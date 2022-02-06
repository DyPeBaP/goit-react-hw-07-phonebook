import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  contactsAsyncFetch,
  contactAdd,
  contactDelite,
} from "./phonebook-operations";
import { filterChange } from "./phonebook-actions";

export function getNewContact(state, { payload }) {
  const haveContact = state.some(({ name }) => name === payload.name);
  return !haveContact
    ? [...state, payload]
    : alert(`A ${payload.name} with the same name has already been added`);
}

export const items = createReducer([], {
  [contactsAsyncFetch.fulfilled]: (_, { payload }) => payload,
  [contactAdd.fulfilled]: (state, action) => getNewContact(state, action),
  [contactDelite.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filter = createReducer("", {
  [filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
