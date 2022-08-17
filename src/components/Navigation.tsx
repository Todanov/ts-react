import { Link } from 'react-router-dom';
import styles from "./Navigation.module.css"
function Navigation() {
    return (
        <nav className={styles.navigation}>
            <h3>Github Search</h3>
            <span>
                <Link className={styles.link} to="/" >Home</Link>
                <Link className={styles.link}  to="/favorites" >FavoritePage</Link>
            </span>
        </nav>
    );
}

export default Navigation;