import React from "react"
import "../utils/styles/skills.css"
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash'
export default function skills() {
  return (
    <div>
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
        <Fade bottom>
        <h4>Complete version will be <br /> <br /> Updated Soon!!</h4>
        </Fade>
      </div>
    </div>
  )
}
