import Search from '../../UI/Search/Search';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <a href="/">
        <img src="" alt="" />
      </a>
      <Search />
    </div>
  );
}

export default Header;
