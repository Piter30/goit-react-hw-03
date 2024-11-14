import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => (
  <div className={styles.searchBox}>
    <label>Find contacts by name</label>
    <input
      type="text"
      value={filter}
      onChange={e => onFilterChange(e.target.value)}
    />
  </div>
);

export default SearchBox;
