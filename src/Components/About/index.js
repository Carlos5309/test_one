import React from 'react'
import { Title } from '../Title'
import { ContentAbout } from './styles'
import aboutImage  from '../../Assets/imagesAbouts.png'
import { Button } from '../Button'
import { Wrapper } from '../Wrapper';

export const About = (props) => {
    return(
        <React.Fragment>
            <Title nameTitle="Abouts" />
            <Wrapper>
        <ContentAbout>
           <div className="sub-about">
               <div className="content-about-description">
                   <h3>Create Interactive Prototipes</h3>
                   <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico 
                        en demostraciones de grafías o de borradores de diseño para
                        probar el diseño vitiposual antes de insertar el texto 
                        fina.
                    </p>
                    <div className="content-button-about">
                        <Button nameHiro = "Get about"/>
                    </div>
               </div>
               <div className="content-about-image">
                   <img className="about-image" src={aboutImage}  alt="about-image" />
               </div>
           </div>
        </ContentAbout>
        </Wrapper>
        </React.Fragment>
    )
}