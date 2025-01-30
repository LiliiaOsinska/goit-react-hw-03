import s from "../SearchBox/SearchBox.module.css";
const SearchBox = (value, filterContacts) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={() => filterContacts}
      />
    </div>
  );
};
export default SearchBox;
