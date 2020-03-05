import React from "react"
import "../components/styles/skills.css"
import Fade from "react-reveal/Fade"
import Flash from "react-reveal/Flash"
export default function skills() {
  return (
    <div>
    <p className="recent-posts">Recent Posts</p>
      <div className="container">
      
        <Fade right>
          <div className="card">
            <h4>HELLO</h4>
            <p>Lorem ipsum dolor modi laudantium. Sequi, ducimus?</p>
          </div>
        </Fade>
        <Fade left>
          <div className="card">
            <h4>WORLD</h4>
            <p>Lorem ipsum dolor modi laudantium. Sequi, ducimus?</p>
          </div>
        </Fade>
        <Fade left>
          <div className="card">
            <h4>Hola!</h4>
            <p>Lorem ipsum dolor modi laudantium. Sequi, ducimus?</p>
          </div>
        </Fade>
        <Fade bottom>
        <div className="card">
          <h4>Google</h4>
          <p>Lorem ipsum dolor modi laudantium. Sequi, ducimus?</p>
        </div>
        </Fade>
        <Flash>
          <h4>
            Complete version will be <br /> <br /> Updated Soon!!
          </h4>
        </Flash>
        <img src="https://dreamy-meninsky-7a16dd.netlify.com/static/about-77a29da12162998f54a365d8fe6703e1.svg" alt="" srcset=""/>
      </div>
    </div>
  )
}
