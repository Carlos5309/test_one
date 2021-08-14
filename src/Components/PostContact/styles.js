import styled from 'styled-components'


export const ContentPost = styled.div`
    width: 300px;
    height: 372px;
    background-color: white;
    text-align: center;
    margin: 55px;
    box-shadow: 0 -1px 8px 0 rgb(0 0 0 / 40%);
    transition: 0.3s;
    border-radius: 10px;
    
    .content{
        display: flex;
    }

    .content_one-fila{
        margin-right: 2px;
        border-radius: 7px 0px 0px 7px;
    }

    .image-one{
        border-radius: 8px 0px 0px 8px;
        height: 372px;
    }

    .content-sub{
        width: 100%
    }

    .content-sub-dates{
        display: flex;
        justify-content: space-around;
        margin: 25px;
    }
    p{
        font-size: 13px;
    }

    .logo{
        height: 87px;
    }

    .text-barras{
        font-size: 8px;
        font-weight: 500;
    }

    .barras{
        height: 33px;
        width: 100px;
    }
    .link-text{
        margin-top: -9px;
        font-size: 13px;
    }

    .name-empresa{
        font-weight: 800;
    }


`;
