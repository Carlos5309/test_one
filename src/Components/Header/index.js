import React from 'react'
import { Link } from 'react-router-dom'
import { ContentHeader } from './styles'


export const Header = () => {
    return(
        <ContentHeader>
            <div className="sub-header">
                <Link to="/Header" className="links">Home</Link>
                <Link to="/Header" className="links">FQ</Link>
                <Link to="/Header" className="links">Features</Link>
                <Link to="/Header" className="links">Contact</Link>
                <Link to="/Header" className="links">Bog</Link>
            </div>
        </ContentHeader>
    )
}