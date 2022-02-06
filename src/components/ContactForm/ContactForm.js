import { useState } from "react";
import { useDispatch } from "react-redux";
import { contactAdd } from "../../redux/phonebook-operations";
import s from "./ContactForm.module.css";

function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        return setName(value);

      case "phone":
        return setNumber(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactAdd({name, phone}));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.formBox} onSubmit={handleSubmit}>
      <label className={s.labelName}>
        <p className={s.itemName}>Name</p>
        <input
          className={s.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className={s.labelNumber}>
        <p className={s.itemNumber}>Phone</p>
        <input
          className={s.inputNumber}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={phone}
        />
      </label>
      <button className={s.buttonAdd} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
