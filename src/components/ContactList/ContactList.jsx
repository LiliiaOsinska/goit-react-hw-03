import Contact from "../Contact/Contact.jsx";
import s from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              handleDelete={handleDelete}
            ></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
