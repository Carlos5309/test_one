import React, { Component } from 'react'
import { Title } from '../Title'
import { ContainerForm } from './styles'
import { ButtonForm } from '../ButtonForm'
 
class Form extends Component{
    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    celularRef = React.createRef();
    mensajeRef = React.createRef();
    enviarData = (e) => {
        e.preventDefault();
        const dates = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            celular: this.celularRef.current.value,
            mensaje: this.mensajeRef.current.value,
        }
        let inputName = '', inputLastName = '', inputNumber = '', inputPhone = ''

        window.open(`https://api.whatsapp.com/send?phone=573223149605&text=Pedido%20${inputName}%20${inputLastName}${inputNumber}%20${inputPhone}`)
        e.currentTarget.reset();
    }

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
                                        <input ref={this.nombreRef} required type="text" className="inputs-one"  type="text" /><br />
                                    </div>
                                    <div className="content-inputs-one">
                                        <label>Apellido: </label><br />
                                        <input ref={this.apellidoRef} required type="text" className="inputs-one two"  type="text" />
                                    </div>
                                </div>
                                <div className="conten-input-phone">
                                    <label>Celular: </label><br />
                                    <input ref={this.celularRef} required type="number" className="input-celular" />
                                </div>
                                <div className="text-tarea">
                                    <label>Mensaje: </label><br />
                                    <textarea ref={this.mensajeRef} required className="campu-description" ></textarea> 
                                </div>
                                <div className="content-button-submit">
                                    <ButtonForm onClick={this.enviar} className="enviar" nameButtonForm ="Enviar" />
                                </div>
                            </form>
                        </div>
                    </div>
            </ContainerForm>
        )
    }
}

export default Form;