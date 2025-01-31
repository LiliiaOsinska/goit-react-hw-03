import contacts from "../src/assets/contacts.json";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import s from "../src/App.module.css";
import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  const [cont, setCont] = useState(
    () => JSON.parse(localStorage.getItem("userContact")) ?? contacts
  );
  // Запис елемента в localStorage
  useEffect(() => {
    localStorage.setItem("userContact", JSON.stringify(cont));
  }, [cont]);

  const [searchValue, setSearchValue] = useState("");

  // Видалення елемента
  const handleDelete = (id) => {
    const newContacts = cont.filter((cont) => cont.id !== id);
    setCont(newContacts);
  };
  // Фільтрований масив
  const filterContacts = cont.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  // Створення нового контакту
  const addContact = (newContact) => {
    // console.log(newContact);

    setCont((cont) => [...cont, newContact]);
  };

  return (
    <div>
      <h1 className={s.title}>Phone book</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setSearchValue={setSearchValue} />
      <ContactList contacts={filterContacts} handleDelete={handleDelete} />
    </div>
  );
}
