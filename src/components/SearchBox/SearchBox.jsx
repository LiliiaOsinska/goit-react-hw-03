import s from "../SearchBox/SearchBox.module.css";
const SearchBox = ({ value, setSearchValue }) => {
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
