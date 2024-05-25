import React, { useState } from 'react';
import { Link } from "react-router-dom";


import logo from '../../utils/images/Fictional company logo.png';
import profilePicImg from '../../utils/images/userImg.png';
import angleRightIcon from '../../utils/images/angle-right_icon.png';
import globeIcon from '../../utils/images/glodeIcon.png';
import signOutIcon from '../../utils/images/signoutIcon.png';
import menuBtnIcon from '../../utils/images/menuBtn.png';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
  return (
    <nav className="header__nav d-flex_h__between">
        <section className="d-flex_h">
            <Link to="/" className="header-logo">
                <img src={logo} alt="logo"/>
            </Link>
            <ul className={`header-menu_links ${menuVisible ? 'show' : ''}`}>
                <li className="active"><Link to="" className="active">Exchange</Link></li>
                <li><Link to="">Wallet</Link></li>
                <li><Link to="">Roqqu Hub</Link></li>
            </ul>
        </section>

        <section className="header-user__section d-flex_h__between">
            <div className="user-profile hide_on_mobile d-flex_h__between">
                <div className="profile-pic"><img src={profilePicImg} alt="profile-pic" /></div>
                <span>Olakunle Te...</span>
                <Link to=""><img src={angleRightIcon} alt="angle-right" /></Link>
            </div>
            <div className="d-flex_h hide_on_mobile">
                <Link to=""><img src={globeIcon} alt="Globe Icon" /></Link>
                <Link to=""><img src={signOutIcon} alt="Sign Out Icon" /></Link>
            </div>
            <div className="d-flex_h hide_on_desktop">
                <span className="profile-pic">
                    <img src={profilePicImg} alt="User Profile" />
                </span>
                <Link to="">
                    <img src={globeIcon} alt="Globe Icon" />
                </Link>
                <span onClick={toggleMenu} className="menu-toggle_btn">
                    <img src={menuBtnIcon} alt="Menu Button" />
                </span>
            </div>
        </section>
    </nav>
  )
}

export default Navbar