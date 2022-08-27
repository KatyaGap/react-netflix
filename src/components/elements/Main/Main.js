import { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Episodes from '../Episodes/Episodes';
import Information from './Information';
import styles from './Main.module.scss';

function Main() {
  const [isSideBarShow, setIsSideBarShow] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
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
          width: isSideBarShow ? '85%' : '90%',
        }}
      >
        {activeTab === 1 ? (
          <Information movie={DATA[0]} />
        ) : (
          activeTab === 2 && <Episodes />
        )}

        <BottomNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
}

export default Main;
