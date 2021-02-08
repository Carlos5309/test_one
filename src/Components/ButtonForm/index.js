import React from 'react'
import { ContentButtonForm } from './styles'


export const ButtonForm = (props) =>{
    return(
        <ContentButtonForm>
            <div className="sub-contentButtonForm">
                <button>{props.nameButtonForm}</button>
            </div>
        </ContentButtonForm>
    )
}