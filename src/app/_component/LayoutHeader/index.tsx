import Logo from '../Logo';
import Profile from '../Profile';
import ZLink from '../ZLink';
import styles from './index.module.css';

const LayoutHeader = () => {
  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.HeaderStart}>
        <Logo />
      </div>
      <div className={styles.HeaderEnd}>
        <ZLink path='/blog' text='Blog' />
        <Profile />
      </div>
    </header>
  );
};

export default LayoutHeader;
