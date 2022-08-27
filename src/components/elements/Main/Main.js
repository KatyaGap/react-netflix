import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';
import styles from './Main.module.scss';

function Main() {
  return (
    <div>
      Main
      <Sidebar />
      <div style={{}}>
        <Information movie={DATA[0]} />
				<BottomNavigation />
      </div>
    </div>
  );
}

export default Main;
