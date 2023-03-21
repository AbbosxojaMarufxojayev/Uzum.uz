import React from "react";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineHome, AiOutlineMenu} from "react-icons/ai"
import { NavLink } from "react-router-dom"

function Navbar() {
  const NAVBAR__DATA = [
    "Elektronika",
    "Maishiy texnika",
    "Kiyim",
    "Poyabzallar",
    "Go'zallik",
    "Salomatlik",
    "Qurilish va ta'mirlash",
    "Avtotovarlar",
    "Bolalar tovarlari",
    "Aksessuarlar",
    "Uy-ro'zg'or buyumlari",
    "Kompyuterlar",
    "Telefonlar"
  ]

  return (
    <div className="navbar container">
      <div className="navbar__top">
        <NavLink to={'/'} className="nav__logo">
          <h2>Uzum market</h2>
        </NavLink>
        <button className="nav__catalog">
          <AiOutlineMenu/>
          <span>Katalog</span>
        </button>
        <div className="nav__search">
          <input type="text" placeholder="Mahsulotlarni qidirish" />
          <button>
            <FiSearch />
          </button>
        </div>
          <div className="nav__icons">
            <NavLink to={'/'} className="nav__item nav__none">
              <AiOutlineHome/>
              <span>Bosh sahifa</span>
            </NavLink>
            <NavLink to={'/admin'} className="nav__item">
            <AiOutlineUser/>
            <span>Kirish</span>
            </NavLink>
            <NavLink to={'/sevimlilar'} className="nav__item">
            <AiOutlineHeart/>
            <span>Sevimlilar</span>
            </NavLink>
            <NavLink to={'/cart'} className="nav__item">
            <AiOutlineShoppingCart/>
            <span>Savatcha</span>
            </NavLink>
            
          </div>
      </div>
      <div className="navbar__bottom">
        <ul className="nav__collection">
          {
            NAVBAR__DATA?.map((el, inx)=> <li key={inx} className="nav__col-item">
              {el}
            </li>)
          }
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
