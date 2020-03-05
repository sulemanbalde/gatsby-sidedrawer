import React from "react"
import "../components/styles/sidebar.css"
import { slide as Menu } from "react-burger-menu"
import { TiStarOutline as star } from "react-icons/fa"

export default function sidebar() {
  return (
    <div>
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="#testid2">
          Posts
        </a>
        <a id="courses" className="menu-item" href="#testid3">
          Courses
        </a>
        <a id="android_app" className="menu-item" href="/">
          Android App
        </a>
        <a id="about" className="menu-item" href="/">
          About Me
        </a>
        <fav />
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
      <div className="topright">
        <ul>
          <li>
            <a href="https://www.github.com/Mr404Found">Github</a>
            <a href="mailto:saisumanth2303@gmail.com">Say Hi!</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
