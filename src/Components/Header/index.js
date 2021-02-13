import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContentHeader } from './styles'
import { FiMenu, FiXSquare } from "react-icons/fi";


class Header extends Component{

    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        return(
        <ContentHeader>
            <div className="content-main-button ">
                <button className="icon-menu" onClick={this.handleClick}>
                    <i className="icon" >
                        {this.state.clicked ? <FiXSquare /> : <FiMenu />  }
                    </i>
                </button>
            </div>  
            <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                <div className="content-links">
                    <Link to="/" className="links">Home</Link>
                </div>
                <div className="content-links">
                    <Link to="/Header" className="links">Proyects</Link>
                </div>
                <div className="content-links">
                    <Link to="/Header" className="links">Features</Link>
                </div>
                <div className="content-links">
                    <Link to="/Form" className="links">Fqa</Link>
                </div>
                <div className="content-links">
                    <Link to="/Header" className="links">Contact</Link>
                </div>
            </div>
        </ContentHeader>
        )
    }
}

export default Header;