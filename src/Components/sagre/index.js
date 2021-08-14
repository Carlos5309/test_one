import React from 'react'
import ImageSangre from '../../Assets/uno.jpg'
import Imagetext from '../../Assets/dos.jpeg'
import ContentAbouts from './styles'


export const Sangre = () =>{
    return(
        <ContentAbouts>
            <div className="content-image">
                <img className="images" src={ImageSangre} />
            </div>
            <div className="content-image">
                <img className="images" src={Imagetext} />
            </div>
        </ContentAbouts>
    )
}