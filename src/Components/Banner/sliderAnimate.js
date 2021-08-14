import React, {Component} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { ContenSlider } from './styles'


const photos = [
    {
        name: 'photo 1',
        url: 'https://images.unsplash.com/photo-1612832020548-b80943980765?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80pp'
    },
    {
        name: 'photo 1',
        url: 'https://images.unsplash.com/photo-1615933530038-314d91bb1039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'photo 1',
        url: 'https://images.unsplash.com/photo-1615932114921-0ffc1852c5d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'photo 1',
        url: 'https://images.unsplash.com/photo-1615927998810-ca467ad48c5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    
]

class SliderAnimate extends Component{
    render(){
        const settings = {
            // dats: true,
            // // fade: true,
            // infinte: true,
            // speed: 500,
            // slidesToShow: 1,
            // arrows: true,
            // slidesToScroll: 1,
            // className: "slides"

            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return(
            <ContenSlider>
                <Slider className="sub-slider" {...settings }>
                {photos.map((photo) =>{
                    return(
                        <div>
                            <img width="100%" height="350px" object-fiv src={photo.url} />
                        </div>
                    )
                })}

                </Slider>
            </ContenSlider>
        )
    }
}


export default SliderAnimate;