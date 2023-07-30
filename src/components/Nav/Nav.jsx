import classes from './Nav.module.css'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { CustomLink } from "./CustomLink";

const Nav = () => {

    // Хук useNavigate - для программных переходов по страницам
    const navigate = useNavigate();

    const backLink = (e) => {
        e.preventDefault();

        // параметр в виде number - для перехода по истории
        // ('two', { replace: false }) - указание урла для перехода и объект, определяющий нужно ли записывать переход в историю
        navigate(-1);
    }

    return (
        <nav className={classes.nav}>

            <div className={classes.backLink}>
                <Link to='/' className={classes.link} onClick={backLink}> ← Назад </Link>
            </div>

            <div>
                <CustomLink to="/">Главная</CustomLink>
            </div>
            <div>
                <CustomLink to="/profile">Профиль</CustomLink>
            </div>
            <div>
                <CustomLink to="/dialogs">Сообщения</CustomLink>
            </div>
            <div>
                <CustomLink to="/news">Новости</CustomLink>
            </div>
            <div>
                <CustomLink to="/users">Пользователи</CustomLink>
            </div>
            <div>
                <CustomLink to="/blog" >Блог</CustomLink>
            </div>
        </nav>
    );
}

export default Nav;
