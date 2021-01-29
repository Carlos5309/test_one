import React from 'react'
import { WrappeFeatures } from './styles'
import { Cards }  from '../Cards'
import imageCarOne from '../../Assets/tasas_js.png'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

export const Features = () => {
    return(
        <React.Fragment>
            <Title nameTitle="Features" />
             <Wrapper>
            <WrappeFeatures>
                <Cards 
                    image={imageCarOne}
                    subTitleCar="Titulo dinamico"
                    link="link dinamicos"
                />
                <Cards 
                    image={imageCarOne}
                    subTitleCar="Titulo dinamico"
                    link="link dinamicos"
                />
                <Cards 
                    image={imageCarOne}
                    subTitleCar="Titulo dinamico"
                    link="link dinamicos"
                />
                <Cards 
                    image={imageCarOne}
                    subTitleCar="Titulo dinamico"
                    link="link dinamicos"
                />
                <Cards 
                    image={imageCarOne}
                    subTitleCar="Titulo dinamico"
                    link="link dinamicos"
                />
                <Cards 
                    image={imageCarOne}
                    subTitleCar="Titulo dinamico"
                    link="link dinamicos"
                />
            </WrappeFeatures>
            </Wrapper>
        </React.Fragment>
    )
}