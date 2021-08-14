import React from 'react';
import OneFila from '../../Assets/one_fila.PNG';
import TwoFlia from '../../Assets/two_fila.PNG';
import { ContentPost } from './styles'
import Enganche from '../../Assets/enganche.PNG'
import Logo from '../../Assets/logomas.png';



export const PostCarOne = () => {
    return(
        <ContentPost>
            <div className="content">
               <div className="contet_one-fila">
                   <img className="image-one" src={OneFila} />
               </div>
               <div className="contet_two-fila">
                   <img src={TwoFlia} />
               </div>
               <div className="content-sub">
                    <div>
                        <div className="content-sub-dates">
                            <div>
                                <img src={Enganche} />
                            </div>
                            <div>
                                <p><strong>001</strong></p>
                            </div>
                        </div>
                    </div>
                <div className="text-main">
                   <p><strong>
                   Este documento es personal e 
                       intransferible identifica al portador
                       como miembro de la empresa <br />
                            IPS RIO SINU S.A.S <br /><br />
                            Tel: 323 572 3845 <br />

                            Sede Administrativa: Cr 7 35-43 <br />
                            MONTERIA-CORDOBA <br />
                            Email: ipsriosinu@gmail.com<br />

                   </strong></p>
               </div>
               <div  className="contentImage">
                   <img className="image-car-two"  src={Logo} />
               </div>
               </div>
            </div>
        </ContentPost>
    )
}