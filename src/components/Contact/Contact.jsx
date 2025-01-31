import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import s from "../Contact/Contact.module.css";

const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <div className={s.contact}>
      <div>
        <p className={s.contact_name}>
          <IoMdContact className={s.contact_svg} />
          {name}
        </p>
        <p className={s.contact_number}>
          <BsFillTelephoneFill className={s.contact_svg} />
          {number}
        </p>
      </div>
      <button onClick={() => handleDelete(id)} className={s.contact_btn}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
