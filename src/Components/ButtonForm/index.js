import React from 'react'
import { ContentButtonForm } from './styles'



export const ButtonForm = (props) =>{
    return(
        <ContentButtonForm>
            <div className="sub-contentButtonForm">
                <button className="button">{props.nameButtonForm}</button>
            </div>
        </ContentButtonForm>
    )
}