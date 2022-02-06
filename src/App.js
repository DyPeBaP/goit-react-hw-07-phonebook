import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.app}>
      <ContactForm />
      <Filter title={'PhoneBook'}/>
      <ContactList title={'Contacts'}/>
    </div>
  );
}
