import styles from './Sidebar.module.scss';

const menu = ['Popular', 'TV Shows', 'Films', 'My list'];
function Sidebar({ isSideBarShow, setIsSideBarShow }) {
  return (
    <div className={styles.sidebar} style={{ width: isSideBarShow ? '30%' : '15%' }}>
      <button type="button" onClick={() => setIsSideBarShow((prev) => !prev)}>
        {/* <i className={`bx bx-${isSideBarShow ? 'x' : 'menu-alt-left'}`}></i> */}
				☰
      </button>
      <ul className={isSideBarShow ? styles.show : ''}>
        {menu.map((item) => (
          <li key={item}>
            <a href={item}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
