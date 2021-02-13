import React from 'react'
import { Contenterror } from './styles'
import ImageError from '../../Assets/error.svg'


export const Error = () => {
    return(
        <Contenterror>
            <div className="content-image">
                <img className="imageError" src={ImageError} alt="ImageError" />
            </div>
        </Contenterror>
    )
}