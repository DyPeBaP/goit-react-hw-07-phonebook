import ContactListItem from "../ContactListItem/ContactListItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  contactsAsyncFetch,
  contactDelite,
} from "../../redux/phonebook-operations";
import {getVisibleContacts} from "../../redux/phonebook-selectors";
import s from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(contactsAsyncFetch());
  }, [dispatch]);

  return (
    contacts && (
      <ul className={s.list}>
        {contacts.map(({ id, name, phone }) => (
          <li className={s.item} key={id}>
            <ContactListItem key={id} name={name} phone={phone} />
            <button
              className={s.buttonDelete}
              type="button"
              onClick={() => dispatch(contactDelite(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
}

export default ContactList;
