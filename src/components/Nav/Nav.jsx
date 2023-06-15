import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    function setActiveClass(a) {
        const {isActive} = a;

        if (isActive) {
            return `${classes.link} ${classes.activeLink}`;
        }
        return `${classes.link}`;
    }

    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/" className={setActiveClass}>Главная</NavLink>
            </div>
            <div>
                <NavLink to="/profile" className={setActiveClass}>Профиль</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={setActiveClass}>Сообщения</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={setActiveClass}>Новости</NavLink>
            </div>
        </nav>
    );
}

export default Nav;
