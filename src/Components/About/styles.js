import styled from 'styled-components'


export const ContentAbout = styled.section`
    background-color: #f1f2f5;
    min-width: 80%;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 75px;
    @media (max-width: 450px){
        padding-top: 0;
    }

    .sub-about {
        width: 100%;
        display: flex;
        justify-content: center;
        @media(max-width: 950px){
            display: block;
            justify-content: center; 
            width: 100%; 
            padding: 0 15px;
        }
       
    }

    h3{
        padding: 16px 0;
    }

    .content-about-image{
        width: 50%;
        justify-content:flex-start;
        @media (max-width: 950px){
            margin-top:50px;
            display: flex;
            justify-content: center;
            width: 100%;
            }
        }
    .about-image{
        height: 350px;
        object-fit: cover;
        width: 100%;
    }

    .content-about-description{ 
        width: 50%;
        justify-content:flex-start;
        margin-right: 30px;
        @media (max-width: 950px){
            width: 100%;
            padding: 0 15px;
            
            }
        }
    .content-button-about{
        padding: 10px 0;
    }


`