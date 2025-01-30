import Contact from "../Contact/Contact.jsx";
import s from "../ContactList/ContactList.module.css";
import PropTypes from "prop-types";
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ContactList;
