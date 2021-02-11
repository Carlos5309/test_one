import React from 'react'
import { WrappeFeatures } from './styles'
import { Cards }  from '../Cards'
import imageCarOne from '../../Assets/tasas_js.png'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

export const Features = () => {
    return(
        <React.Fragment>
            <WrappeFeatures>
            <Wrapper>
            <Title nameTitle="Features" />
                <div className="sub-features fadeInDown">
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
                    </div>
            </Wrapper>
            </WrappeFeatures>
        </React.Fragment>
    )
}