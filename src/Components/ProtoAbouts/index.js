import React from 'react'
import { ContentAbouts } from './styles'
import imageAbout from '../../Assets/imagesAbouts.png'
import{ Wrapper } from '../Wrapper'
import { Title } from '../Title'
import { Cards } from '../Cards'

export const ProtoAbouts = () => {
    return(
        <React.Fragment>
            <ContentAbouts>
                <Wrapper>
                   <div className="sub-abouts">
                        <div className="content-image">
                                <img className="images-abouts" src={imageAbout} alt="image-abouts" />
                        </div>
                        <div className="content-description">
                            <Title nameTitle="Create Interactive Prototypes" />
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico 
                                en demostraciones de tipografías o de borradores de diseño para
                                probar el diseño visual antes de insertar el texto 
                                fina
                            </p>
                            <Cards />
                        </div>
                   </div>
                </Wrapper>


            </ContentAbouts>
        </React.Fragment>
    )
}