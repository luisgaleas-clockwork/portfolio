import React from 'react'

const ProjectItems = (props) => {
    const { work } = props
    return (
        <div className="project__container">
            <div className="project_item">
                <div className="project__image_container">
                    <img src={work.image} />
                    <div className="project__text_container">
                        <a href={work.github}>{work.name}</a>
                    </div>
                </div>
            </div>
            <p></p>
        </div>
    )
}
export default ProjectItems;