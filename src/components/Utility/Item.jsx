import React from 'react'

const ProjectItems = (props) => {
    const { work } = props
    return (
        <div className="project__container">
            <div className="project_item">
                <div className="project__image_container">
                    <img src={work.image} />
                    <div className="project__text_container">
                        <h3>{work.name}</h3>
                        <div className="link__buttons">
                        <a href={work.github}>Github</a>
                        <a href={work.webpage}>Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <p></p>
        </div>
    )
}
export default ProjectItems;