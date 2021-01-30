import React from 'react'
import { ContentHiro } from './styles'
import { Button } from '../Button'
import ImgHiro from '../../Assets/pollos-hiro.jpg'

export const Hiro = () => {
    return(
        <ContentHiro>
            <div className="sub-hiro-left">
                <h1>Grouw Your <br />
                    Business Faster
                </h1>
                <p>Lorem ipsum es el texto que se usa habitualmente
                    en diseño gráfico en demostraciones de tipografías
                    o de borradores de diseño para
                </p>
                <div className="content-hiro-button">
                    <Button 
                        nameHiro ="Get Started"
                    />
                </div>
            </div>
            <div className="sub-hiro-rigth">
                <img src={ImgHiro} alt="imageHiro" className="imageHiro" />
            </div>
        </ContentHiro>
    )
}