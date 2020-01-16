import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../../ResumeUpdated.pdf'


class Navbar extends React.Component {
    constructor() {
        super()

        this.openFunction = () => {
            document.getElementById("menu").classList.add("menu__show")
            document.getElementById("mainbox").classList.add("mainbox__show")
        }

        this.closeFunction = () => {
            document.getElementById("menu").classList.remove("menu__show");
            document.getElementById("mainbox").classList.remove("mainbox__show")
        }
    }

    render() {
        return (
            <nav>
                <div id="mainbox" onClick={this.openFunction}>&#9776;</div>

                <div id="menu" className="sidemenu">
                        <a className="closebtn" onClick={this.closeFunction}>&times;</a>
                        <NavLink className="nav-link" exact={true}  to="/" activeClassName="active" onClick={this.closeFunction}>About</NavLink>
                        <NavLink className="nav-link" to="/projects" activeClassName="active" onClick={this.closeFunction}>Projects</NavLink>
                        <NavLink className="nav-link" to="/skill" activeClassName="active" onClick={this.closeFunction}>Skills</NavLink>
                        <NavLink className="nav-link" to="/contact" activeClassName="active" onClick={this.closeFunction}>Contact</NavLink>
                        <a className="nav-link" onClick={this.closeFunction} href={Resume} download>Resume</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;

