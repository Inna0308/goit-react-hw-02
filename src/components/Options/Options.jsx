import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetValue }) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={styles.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={styles.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.btn} onClick={resetValue}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
