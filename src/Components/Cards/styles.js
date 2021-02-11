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
        @media(max-width: 768px){
            width: 400px;
    }
    @media(max-width: 436px){
            max-width: 370px;
    }

    @media(max-width: 400px){
            max-width: 290px;
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