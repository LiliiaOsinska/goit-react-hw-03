import { Formik, Form, Field } from "formik";
import s from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

// Валідація
const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Поле обов'язкове для заповнення")
    .matches(
      /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/,
      "Ім'я може містити тільки літери, пробіли, дефіси та апострофи"
    )
    .min(2, "Ім'я має бути не менше 2 символів")
    .max(50, "Ім'я не може перевищувати 50 символів"),
  number: Yup.string()
    .required("Поле обов'язкове для заповнення")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Телефон має бути у форматі 123-56-89"),
});

const ContactForm = ({ addContact }) => {
  // Початкове значення полів форми
  const initialValues = {
    name: "",
    number: "",
  };

  //Створення унікальних ідентифікаторів полів
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    addContact(values);
    // console.log(values);
    actions.resetForm();
  };
  return (
    <div className={s.form_container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        {() => (
          <Form>
            <div className={s.form_input}>
              <label className={s.form_label} htmlFor="name">
                Name
              </label>
              <Field
                className={s.form_field}
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="Ім'я"
              ></Field>
              <ErrorMessage className={s.error} name="name" component="span" />
            </div>
            <div className={s.form_input}>
              <label className={s.form_label} htmlFor="number">
                Number
              </label>
              <Field
                className={s.form_field}
                type="text"
                name="number"
                id={numberFieldId}
                placeholder="Номер телефона"
              ></Field>
              <ErrorMessage
                className={s.error}
                name="number"
                component="span"
              />
            </div>
            <button onSubmit={() => {}} className={s.form_btn} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
