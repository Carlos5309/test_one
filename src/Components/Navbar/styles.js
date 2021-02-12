import styled from 'styled-components'

export const ContentNavbar = styled.div`

    /* height: 80px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #c2c2c2;
    position: fixed;
    font-size:1.2rem;
    @media(max-width:767px){
        background-color: rgba(0,0,0,.4);
        height: 250px;
        width: 100%;
    }


    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    background-color: white;
    @media(max-width: 767px){
        display: block;
    }; */

    .sub-header{
        height: 60px;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #c2c2c2;
        position: fixed;
    
        @media(max-width: 767px){
            display: block;
            height: 326px;
            background-color: rgba(0,0,0,.6);
            z-index: 10;
            width: 100%;
            padding: 69px 46px;
            transition: .3s;
            left: -100vh;
          
        }

    };


    .sub-header.is-active{
        @media (max-width:767px){
            left: 0;
        }
    }

    .content-main-button{
            @media (min-width: 767px){
                display: none;
            }
        }
        .bugger-button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 69px;
            height: 69px;
            font-size: 30px;
            position: fixed;
            z-index: 40;
            /* padding: 15px 23px; */
            color: white;
            background-color: rgba(0,0,0,.4);
        
        };

        .content-links{
            padding: 15px 48px;
            cursor: pointer;
        };

        .content-links:hover{
            background-color: rgba(0,0,0,.6);

        }

    .links{
        padding: 5px;
        text-decoration: none;
        color: black;
        @media(max-width:767px){
            color: white
        }
    }

 .fadeInDown {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;

    };

    @-webkit-keyframes fadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        };

    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
};

    @keyframes fadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        };
    };
    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    };
`;
