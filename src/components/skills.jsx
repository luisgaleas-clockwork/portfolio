import React from 'react'
import Icons from "./Utility/Icon"
import Code from "../skill.json"

class Skill extends React.Component {
    constructor() {
        super()
        this.state = {
            skill: Code
        }
    }
    render() {
        return (
            <div className="skill-bg animated fadeIn slow">
                <div className="bar"></div>
                <div className="heading-text">
                    <h3>Skills</h3>
                </div>
                <div className="skill-flex">
                    {this.state.skill.map((skillM, index) => {
                        return (<Icons key={index} skill={skillM} />)
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Skill