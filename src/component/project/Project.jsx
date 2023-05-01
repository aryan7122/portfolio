import React from 'react'
import './project.css'
import P1 from '../../img/p1.png'
import P2 from '../../img/p2.png'
import P3 from '../../img/p3.png'

const Project = () => {
    return (
        <div className='project'>
            <div className="head_title">
                <h1>Project</h1>
            </div>
            <div className="content">
                <div className="cont_1">
                    <div className="left">
                        <h1>Project Name</h1>
                        <p>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                        <button>View Project</button>
                    </div>
                    <div className="right">
                        <img src={P1} alt="" />
                    </div>
                </div>
                <div className="cont_1 rever">
                    <div className="right">
                        <img src={P2} alt="" />
                    </div>
                    <div className="left">
                        <h1>Project Name</h1>
                        <p>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                        <button>View Project</button>
                    </div>
                </div>
                <div className="cont_1">
                    <div className="left">
                        <h1>Project Name</h1>
                        <p>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                        <button>View Project</button>
                    </div>
                    <div className="right">
                        <img src={P3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
