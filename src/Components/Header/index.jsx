import React from "react";
import {  NavLink } from "react-router-dom";
import './NavBar.css';
import homeSushiLogo from '../image/homeSushiLogo.png';


const Header = () => {


    return(
        
            <header className='header'>
                <div className="container">
                    <div className='box'>
                        <div className='logo_img'>
                            <img className="logo_img" src={homeSushiLogo} alt="" />
                        </div>
                            <nav className="nav-menu ">
                                <NavLink className='link' to="/" exact>Главная</NavLink>
                                <NavLink className='link' to="/Sets">Сеты</NavLink>
                                <NavLink className='link' to="/SushiAndRols">Суши и роллы</NavLink>
                                <NavLink className='link' to="Rewiews">Отзывы</NavLink>
                                <NavLink className='link' to="AboutUs">О нас</NavLink>
                            </nav>

                    </div>
                </div>
            </header>
        )
    
    }
export default Header;
    