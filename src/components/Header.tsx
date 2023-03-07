import styles from './Header.module.css';

import rocketLogo from '../assets/rocket-logo.svg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocketLogo} alt="Foguete decolando" />
                <div className={styles.title}>
                    <span>to</span>
                    <span>do</span>
                </div>
            </div>
        </header>
    );
}

export { Header };
