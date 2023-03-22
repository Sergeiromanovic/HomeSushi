import React from "react";
import './NavBar.css';
import homeSushiLogo from '../image/homeSushiLogo.png';

const NavBar = () => {
    return (
        <header className='header'>
        <div  className="container">
            <div className='box'>
                <div className='logo_img'>
                    <img className="logo_img" src={homeSushiLogo} alt="" />
                </div>
                <ul className="nav-menu">
                    <li>
                        <a href="##">Сеты</a>
                    </li>
                    <li>
                        <a href="##">Суши и роллы</a>
                    </li>
                    <li>
                        <a href="##">Ланч-меню</a>
                    </li>
                    <li>
                        <a href="##">Напитки</a>
                    </li>
                    <li>
                        <a href="##">Соусы и гарниры</a>
                    </li>
                    <li>
                        <a href="##">О нас</a>
                    </li>
                </ul>
            </div>
            </div>
        </header>
    )
}

export default NavBar;