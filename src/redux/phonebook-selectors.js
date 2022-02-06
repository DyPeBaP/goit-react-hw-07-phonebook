import { createSelector } from "@reduxjs/toolkit";
export const selectorContacts = (state) => state.contacts.items;
export const selectorFilter = (state) => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [selectorContacts, selectorFilter],
  (contact, filter) => {
    const toLowerFilter = filter.toLowerCase();
    const allContacts = contact.filter(({ name }) =>
      name.toLowerCase().includes(toLowerFilter));
    return allContacts;
  }
);