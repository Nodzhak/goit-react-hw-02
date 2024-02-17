import styles from './Options.module.css';

export default function Options({ updateFeedback, totalFeedback }) {
  const feedbackTypes = ["good", "neutral", "bad"];

  const handleClick = (type) => {
    updateFeedback(type);
  };

  return (
    <ul className={styles.ul}>
      {feedbackTypes.map((type, index) => (
        <li key={index}>
          <button className={styles.btn} onClick={() => handleClick(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)} 
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button className={styles.btn} onClick={() => handleClick("reset")}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
