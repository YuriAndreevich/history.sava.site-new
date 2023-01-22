import React from "react";
import { Link } from "react-router-dom";
import './Menu.scss'

const Menu = ({ items, active, setActive }) => {
    return (
        <div className={active ? 'menu__active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur">
                <div className="menu__content">
                    <ul>
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/search'>Поиск по датам</Link></li>
                        <li><Link to='/quiz'>Тесты</Link></li>
                        <hr style={{ width: '100hv' }} />
                        {items.map((item, index) =>
                            <li key={index}>
                                <Link to={item.href}>{item.naz}</Link>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Menu;