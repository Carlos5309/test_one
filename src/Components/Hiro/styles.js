import styled from 'styled-components'


export const ContentHiro = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 100px;
    min-width: 80%;
    display: flex;
    margin-top: 100px;


    @media (max-width: 767px){
        display: block;
        flex-wrap: wrap-reverse;
        min-width: 0;
        margin: 55px 35px;

        
    }

    .sub-hiro-left{
        min-width: 250px;
        margin-right: 15px;
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
    }


`;