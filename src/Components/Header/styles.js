import styled from 'styled-components'


export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    background-color: white;

    .sub-header{
        height: 60px;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #c2c2c2;
    
    };

    .links{
        padding: 5px;
        text-decoration: none;
        color: black;
    
    }




    .fadeInDown{
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