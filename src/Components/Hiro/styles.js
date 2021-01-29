import styled from 'styled-components'


export const ContentHiro = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 80%;
    display: flex;
    padding-top: 100px;
    background-color: white;
    

    @media (max-width: 767px){
        display: block;
        flex-wrap: wrap-reverse;
        padding-top: 50px;
        
    }

    .sub-hiro-left{
        min-width: 250px;
        margin-right: 15px;
        padding-left: 10%;
        @media (max-width: 420px){
            padding-left: 7%;
        }
    }


    .imageHiro{
        width: 99%;
        height: auto;

    }
    .content-hiro-button{
        height: 80px;
        display: flex;
        align-items: flex-end;
    };

    p{
        font-size: 10px;
        @media(max-width: 450px){
            font-size: 15px;
        };
    }


`;