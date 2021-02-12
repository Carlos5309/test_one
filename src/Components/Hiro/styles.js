import styled from 'styled-components'


export const ContentHiro = styled.section`
  

.sub-hiro-main{
    @media (max-width: 767px){
        display: block;
        flex-wrap: wrap;
        padding: 60px 0;

        
    }   

    .sub-hiro-left{
        min-width: 250px;
        margin-right: 15px;
        padding-left: 10%;
        @media (max-width: 950px){
            padding-left: 7%;
        }
    }


    .imageHiro{
        width: 99%;
        height: auto;

    }
    .content-hiro-button{
        height: 60px;
        display: flex;
        align-items: flex-end;
    };

    p{
        font-size: 15px;
        /* @media(max-width: 450px){
            font-size: 15px;
        }; */
    }

    .sub-hiro-rigth{
        margin-top:25px;
    }

}
  
    
.fadeInUp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 80%;
    display: flex;
    padding-top: 100px;
    background-color: white;
    @media (max-width:767px){
    padding-top: 50px;

    }



  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}









    


`;