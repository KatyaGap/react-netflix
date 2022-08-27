import { useState } from 'react';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';
import styles from './Main.module.scss';

function Main() {
  const [isSideBarShow, setIsSideBarShow] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Sidebar
        isSideBarShow={isSideBarShow}
        setIsSideBarShow={setIsSideBarShow}
      />
      <div
        className={styles.main}
        style={{
          backgroundImage: `url(${DATA[0].mainImage})`,
          width: isSideBarShow ? '70%' : '85%',
        }}
      >
        <Information movie={DATA[0]} />
        <BottomNavigation
          isSideBarShow={isSideBarShow}
          setIsSidebarShow={setIsSideBarShow}
        />
      </div>
    </div>
  );
}

export default Main;
