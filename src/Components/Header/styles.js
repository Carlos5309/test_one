import styled from 'styled-components'

export const ContentHeader = styled.nav`

display: flex;
justify-content: center;
align-items: center;
@media(max-width: 767px){
    position: relative;
};

.nav-menu .active{
    left: -100vh
};

.nav-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 50%;
    border-bottom: 1px solid #c2c2c2;
    @media(max-width:767px){
        display: flex;
        flex-direction: column; 
        align-items: center;
        height:300px;
        position: absolute;
        top: 80px;
        opacity: 1;
        left: -100%;
        transition: all 0.5s ease;
    }
};

.nav-menu.active{
    width: 100%;
    background-color: rgba(0,0,0,.6);
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 10;
    position: fixed;
    box-sizing: border-box;
    
};

.links{
    color: black;
    height: 75px;
    padding:15px;
    text-decoration: none;
    @media(max-width:767px){
        width:100%;
        text-align: center;
        display:table;
        color: white;
        padding:0;
        height:57px;
        display: flex;
        justify-content: center;
        align-items: center;
    };
    
};

.links:hover{
    background-color: rgba(0,0,0,.6);
}

.icon-menu{
    width:45px;
    height: 45px;
    background-color: rgba(0,0,0,.6);
    @media(min-width:767px) {
        display: none;
    }
};

.icon{
    font-size: 35px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
};

.content-main-button{
    left: 0;
    position: fixed;
    margin-left: 15px;
    z-index: 20;
    margin-top: 113px;
};
.content-links{
    @media (max-width:767px){
        width:100%;
       
        display: flex;
        align-items:center;
        justify-content: center;
        
    }
}

`