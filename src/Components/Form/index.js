import React, { Component } from 'react'
import { Title } from '../Title'
import { ContainerForm } from './styles'
import { ButtonForm } from '../ButtonForm'
 
class Form extends Component{
    // nombreRef = React.createRef();
    // apellidoRef = React.createRef();
    // celularRef = React.createRef();
    // mensajeRef = React.createRef();

     

    // enviarData = (e) => {
    //    var recibo =  enviar.addEventListener('click', this.enviarData)
    //     e.preventDefault();
    //     var inputName = document.getElementsByClassName('inputs-one').value;
    //     var inputLastName = document.getElementsByClassName('two').value;
    //     var inputNumber = document.getElementsByClassName('input-celular').value;
    //     var inputPhone = document.getElementsByClassName('campu-description').value;
        
    //     let url = `https://api.whatsapp.com/send?phone=3223149605&text=hola%20${inputName}%20${inputLastName}${inputNumber}%20${inputPhone}`
    //     console.log(url)
    //     e.currentTarget.reset();
    // }

    render(){
        return(
            <ContainerForm>
                <Title nameTitle="Pedidos" />
                    <div className="content-main-form">
                        <div className="sub-form">
                            <form onSubmit={this.enviarData} className="form">
                                <div className="sub-title-form">
                                    <p>Formulario</p>
                                </div>
                                <div className="sud-sub-input-ones">
                                    <div className="content-inputs-one">
                                        <label>Nombre: </label><br />
                                        <input required type="text" className="inputs-one"  type="text" /><br />
                                    </div>
                                    <div className="content-inputs-one">
                                        <label>Apellido: </label><br />
                                        <input required type="text" className="inputs-one two"  type="text" />
                                    </div>
                                </div>
                                <div className="conten-input-phone">
                                    <label>Celular: </label><br />
                                    <input required type="number" className="input-celular" />
                                </div>
                                <div className="text-tarea">
                                    <label>Mensaje: </label><br />
                                    <textarea required className="campu-description" ></textarea> 
                                </div>
                                <div className="content-button-submit">
                                    <ButtonForm className="enviar" nameButtonForm ="Enviar" />
                                </div>
                            </form>
                        </div>
                    </div>
            </ContainerForm>
        )
    }
}

export default Form;