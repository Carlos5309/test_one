import styled from 'styled-components';

export const ContainerForm = styled.section`
    background-color: white;
    padding-bottom: 70px;
.content-main-form{
    display: flex;
    justify-content: center;
    align-items: center;
}
    .sub-form{
        background-color: #f1f2f5;
        width: 60%;
        padding: 15px;
        display: flex;
        border-radius: 5px;
        justify-content: center;
        @media(max-width: 790px){
            width: 90%;
        }

    }

    .form{
        width: 100%;
        padding: 15px;
    }

    .sub-title-form{
        padding: 15px 0;
    }

    .sud-sub-input-ones{
        width: 100%;
        display: flex;
        justify-content: space-between;
        @media(max-width: 790px){
            display: block;
        }
    
    }

    .content-inputs-one{
        width: 45%;
        padding: 15px 0;
        @media(max-width: 790px){
            width: 100%;
        }

    }

    .conten-input-phone{
        padding: 15px 0;
        width: 100%;
    }

    .input-celular{
        width:100%;
        height: 30px;
    }

    .inputs-one{
        width: 100%;
        height: 30px;
    }

    .text-tarea{
        padding: 15px 0;
        width: 100%;
    }

    .campu-description {
        width: 100%;
        height: 140px;
    }
`;