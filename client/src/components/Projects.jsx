import React from 'react';
import ProjectItems from './Utility/Item'
import Info from "../Work.json";

class Project extends React.Component {
    constructor() {
        super()
        this.state = {
            ProjectWork: Info,
        }
    }
    render() {
        return (
            <div className="main-project-container animated fadeIn slow">
                <div className="bar"></div>
                <div className="heading-text">
                    <h3>Portfolio</h3>
                    <h4>My Work</h4>
                </div>
                <div id="project">
                    {this.state.ProjectWork.map((workM, index) => {
                        return (<ProjectItems key={index} work={workM} />)
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Project;