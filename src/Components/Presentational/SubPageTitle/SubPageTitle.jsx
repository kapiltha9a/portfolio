import styles from './SubPageTitle.module.css';

export default function SubPageTitle({title}) {
  return (
    <h3 className={styles.subPageTitle}>{title}</h3>
  );
}
