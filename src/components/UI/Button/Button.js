import styles from './Button.module.scss';

function Button({ children, cb }) {
  return (
    <button type="button" onClick={cb} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
