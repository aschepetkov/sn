import { Link, useMatch } from 'react-router-dom';
import classes from './Nav.module.css';

/*
* Внутри можно вместо Link использовать NavLink, который умеет
* определять активный урл. Тогда можно избавиться от match
*  */
const CustomLink = (props) => {
    const {
        to,
        children,
        ...rest
    } = props;

    /*
    * Такая функция подойдёт для кастомного значения активной ссылки
    *  */
    // function setActiveClass(a) {
    //     const {isActive} = a;
    //
    //     if (isActive) {
    //         return `${classes.link} ${classes.activeLink}`;
    //     }
    //     return `${classes.link}`;
    // }

    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            className={`${classes.link} ${match ? classes.activeLink : '' }`}
            {...rest}
        >
            {children}
        </Link>
    )
};


export {
    CustomLink,
}
