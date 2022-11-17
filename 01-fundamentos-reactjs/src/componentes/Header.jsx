import styles from "./Header.module.css"

import igniteLogo from '../assets/Logo.svg'

const Header = () => {
return(
    <header className={styles.header}>
        <img src={igniteLogo} style={{margin: "0px 6px"}}></img>
        <strong >Ignite Feed</strong>
    </header>
);
}

export default Header;