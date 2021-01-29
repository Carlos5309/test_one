import React from 'react'
import { ContentTilte } from './styles'


export const Title = (props) => {
    return(
        <ContentTilte>
            <h2>{props.nameTitle}</h2>
        </ContentTilte>
    )
}