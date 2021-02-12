import React, {Component} from 'react'
import { FiMenu,FiXSquare } from "react-icons/fi"
import { ContentNavbar } from './styles'
import { Link } from 'react-router-dom'

class Navbar extends Component{
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
            <ContentNavbar>
               <div className="sub-header is-active fadeInDown">
                   <div className="icon-menu" onClick={this.handleClick}>
                       <i className="icon" >
                           {this.state.clicked ? <FiMenu /> : <FiXSquare />  }
                       </i>
                   </div>
                    <div className="content-links">
                        <Link to="/" className="links">Home</Link>
                    </div>
                    <div className="content-links">
                        <Link to="/Header" className="links">FQ</Link>
                    </div>
                    <div className="content-links">
                        <Link to="/Header" className="links">Features</Link>
                    </div>
                    <div className="content-links">
                        <Link to="/Form" className="links">Contact</Link>
                    </div>
                    <div className="content-links">
                        <Link to="/Header" className="links">Bog</Link>
                    </div>
                </div>
            </ContentNavbar>
        )
    }
}

export default Navbar;