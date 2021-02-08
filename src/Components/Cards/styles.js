import styled from 'styled-components'

export const ContentCars = styled.div`
    padding: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
   
    
    .sub-cars{
        background-color: white;
        padding: 15px;
        width: 336px;
        @media(max-width: 470px){
            width: 390px;
    }
    @media(max-width: 450px){
            max-width: 400px;
    }

    @media(max-width: 400px){
            max-width: 330px;
    }
    
    }

    .image-cars{
        width: 40px;
        height:40px;
        border-radius: 50%;
    };

    .links{
        text-decoration: none;
        color: #00d3b5;
    };

    p{

    }
`;