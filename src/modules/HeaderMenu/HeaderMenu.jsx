import { NavLink } from 'react-router-dom';
import s from './header-menu.module.css';

const getActiveLink = ({isActive}) => {
    return isActive ? s.itemActive : s.item;
}

const HeaderMenu = () => {
    return (
        <header className={s.list}>
            <NavLink className={getActiveLink} to="/">Home</NavLink>
            <NavLink className={getActiveLink} to="/movies">Movies</NavLink>
        </header>
    )
}

export default HeaderMenu;