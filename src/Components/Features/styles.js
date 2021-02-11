import styled from 'styled-components'

export const WrappeFeatures = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f1f2f5;
    width: 100%;
    padding-bottom: 45px;

    .sub-features{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;

        @media(max-width: 810px){
            display: flex;
            justify-content: center;
        }
    }

`;