import React from 'react'
import "../components/styles/sidebar.css"
import { stack as Menu } from 'react-burger-menu'
import {
    TiStarOutline  as star,
} from 'react-icons/fa';

export default function sidebar() {


    return (
        <div>
        <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="#testid2">Values</a>
        <a id="contact" className="menu-item" href="#testid3">Credits</a>
        <a id="contact" className="menu-item" href="/">Location</a>
        <a id="contact" className="menu-item" href="/">Contact</a>
        <fav />
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
      <div className="topright">
          <ul>
              <li>
                  <a href="mailto:saisumanth2303@gmail.com">Say Hi!</a>
              </li>
          </ul>
      </div>
      </div>
    )
}
