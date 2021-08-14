import React from 'react';
import OneFila from '../../Assets/one_fila.PNG';
import TwoFlia from '../../Assets/two_fila.PNG';
import { ContentPost } from './styles'
import Enganche from '../../Assets/enganche.PNG'
import Logo from '../../Assets/logomas.png';
import Barras from '../../Assets/barras.PNG';


export const PostContact = () => {
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
                   <p>NIT:901.083.462-3</p>
                   <h5 className="name-empresa">IPS RIO SINU S.A.S</h5>
                   <p>COD. HABILITACION: 230010212701</p>
               </div>
               <div>
                   <img className="logo" src={Logo} />
               </div>
               <div>
                   <h5> OSCAR LUIS <br />
                        LOPEZ CANTERO <br />
                        Asistente Administrativo <br />
                        CC: 1.065.000.458 <br />
                    </h5>
                    <p className="text-barras">IPS RIO SINU S.A.S, es una entidad de carácter 
                     privado, debidamente habilitada para la presentación
                     de consulta externa especializada.
                    </p>
               </div>
               <div>
                   <img className="barras" src={Barras} />
               </div>
               <div>
                   <p className="link-text"><strong>https://ipsriosinu.herokuapp.com</strong></p>
               </div>
               </div>
            </div>
        </ContentPost>
    )
}