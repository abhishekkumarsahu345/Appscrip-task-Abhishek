import { useState } from 'react';
import styles from '../styles/Home.module.css';

const filters = [
  { name: 'IDEAL FOR', options: ['All', 'Men', 'Women', 'Baby & Kids'] },
  { name: 'OCCASION', options: ['All', 'Casual', 'Formal', 'Party', 'Sports'] },
  { name: 'WORK', options: ['All', 'Office', 'Outdoor', 'Home'] },
  { name: 'FABRIC', options: ['All', 'Cotton', 'Polyester', 'Wool', 'Silk'] },
  { name: 'SEGMENT', options: ['All', 'Premium', 'Budget', 'Mid Range'] },
  { name: 'SUITABLE FOR', options: ['All', 'Winter', 'Summer', 'Monsoon'] },
  { name: 'RAW MATERIALS', options: ['All', 'Organic', 'Synthetic', 'Recycled'] },
  { name: 'PATTERN', options: ['All', 'Solid', 'Stripes', 'Printed', 'Checked'] },
];

export default function Sidebar() {
  const [openSections, setOpenSections] = useState(['IDEAL FOR']);
  const [customizable, setCustomizable] = useState(false);
  const [selected, setSelected] = useState({});

  const toggleSection = (name) => {
    setOpenSections((prev) =>
      prev.includes(name)
        ? prev.filter((s) => s !== name)
        : [...prev, name]
    );
  };

  const toggleOption = (filterName, option) => {
    setSelected((prev) => {
      const current = prev[filterName] || [];
      return {
        ...prev,
        [filterName]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.customizable}>
        <input
          type="checkbox"
          id="customizable"
          checked={customizable}
          onChange={() => setCustomizable(!customizable)}
        />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>

      {filters.map((filter) => (
        <div key={filter.name} className={styles.filterSection}>
          <button
            className={styles.filterHeader}
            onClick={() => toggleSection(filter.name)}
          >
            <span>{filter.name}</span>
            <span>{openSections.includes(filter.name) ? '∧' : '∨'}</span>
          </button>

          {openSections.includes(filter.name) && (
            <div className={styles.filterOptions}>
              <p className={styles.filterAll}>All</p>
              {filter.options.slice(1).map((option) => (
                <label key={option} className={styles.filterOption}>
                  <input
                    type="checkbox"
                    checked={(selected[filter.name] || []).includes(option)}
                    onChange={() => toggleOption(filter.name, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}