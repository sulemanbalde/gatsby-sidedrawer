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
      </div>
    </div>
  )
}
