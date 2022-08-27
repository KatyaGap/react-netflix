import styles from './BottomNavigation.module.scss';

const tabs = [
  {
    id: 1,
    name: 'Overview',
  },
  {
    id: 2,
    name: 'Episodes',
  },
  {
    id: 2,
    name: 'Details',
  },
];

function BottomNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={activeTab === tab.id ? styles.active : ''}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
}

export default BottomNavigation;
