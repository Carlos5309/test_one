import React from 'react'
import { ContentCars } from './styles'
import { Link } from 'react-router-dom'


export const Cards = (props) => {
    return(
        <ContentCars>
            <div className="sub-cars">
                <div className="content-image-cars">
                    <img className="image-cars" src={props.image} />
                </div>
                <p><strong>{props.subTitleCar}</strong></p>
                <p>Lorem ipsum es el texto que se usa habitualmente
                en diseño gráfico en demostraciones de tipografías 
                o de borradores de diseño paraGet Sta
                </p>
                <Link to="/" className="links">{props.link}</Link>
            </div>
        </ContentCars>
        
    )
}