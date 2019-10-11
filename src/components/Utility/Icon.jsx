import React from 'react'

const Icons = (props) => {
    const {skill} = props
    return(
        <div className="icon">
            <i className={skill.icon}></i>
            <h6>{skill.skill}</h6>
        </div>
    )
}

export default Icons