import React from 'react'
import { Link } from 'react-router-dom'
import { ContenButton } from './styles'

export const Button = (props) => {
    return(
        <ContenButton>
            <div className="sub-hiro-button">
                <Link to="/" className="button-main">{props.nameHiro}</Link>
            </div>
        </ContenButton>
    )
}
