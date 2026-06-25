import styles from './MoviesControls.module.css';

export type SortBy = 'title' | 'rating' | 'year';

interface MoviesControlsProps {
  searchValue: string;
  sortBy: SortBy;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortBy) => void;
}

export function MoviesControls({
  searchValue,
  sortBy,
  onSearchChange,
  onSortChange,
}: MoviesControlsProps) {
  return (
    <div className={styles.controls}>
      <input
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search movies"
        className={styles.input}
      />

      <select
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value as SortBy)}
        className={styles.select}
      >
        <option value="title">Title</option>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
}