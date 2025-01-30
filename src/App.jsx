import contacts from "../src/assets/contacts.json";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import s from "../src/App.module.css";
import { useState } from "react";

export default function App() {
  const [cont, setCont] = useState(contacts);

  const [searchValue, setSearchValue] = useState("");

  const handleDelete = (id) => {
    const newContacts = contacts.filter((cont) => cont.id !== id);
    setCont(newContacts);

    console.log(newContacts);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const addContact = () => {};

  return (
    <div>
      <h1 className={s.title}>Phone book</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setSearchValue={setSearchValue} />
      <ContactList contacts={filterContacts} handleDelete={handleDelete} />
    </div>
  );
}
