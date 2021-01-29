import styled from 'styled-components'

export const ContentAbouts = styled.section`
    min-width: 80%;
    background-color: white;
    display: flex;
    justify-content: center;
    padding-top: 60px;


    .sub-abouts{
        width: 100%;
        display: flex;
        justify-content: center;
        @media(max-width: 950px){
            display: block;
            justify-content: center; 
            width: 100%; 
        }
        @media(max-width: 950px){
            display: block;
            justify-content: center; 
            width: 95%; 
        }
    }
    .content-image{
        width: 90%;
        justify-content:flex-start;
        @media (max-width: 420px){
            display: flex;
            justify-content: center;
            width: 100%;
            }
        }


        .content-description{
        width: 90%;
        justify-content:flex-start;
        @media (max-width: 420px){
            width: 100%;
            padding: 0 15px;
            }
        }

    .images-abouts{
        width: 90%;
    }

    p{
        text-align: start;
    }


`;