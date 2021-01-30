import React, { Component } from 'react'
import { Title } from '../Title'
import { ContainerForm } from './styles'
import { Button } from '../Button'
 
class Form extends Component{
    render(){
        return(
            <ContainerForm>
                <Title nameTitle="Pedidos" />
                    <div className="content-main-form">
                        <div className="sub-form">
                            <form className="form">
                                <div className="sub-title-form">
                                    <p>Formulario</p>
                                </div>
                                <div className="sud-sub-input-ones">
                                    <div className="content-inputs-one">
                                        <label>Nombre: </label><br />
                                        <input required className="inputs-one"  type="text" /><br />
                                    </div>
                                    <div className="content-inputs-one">
                                        <label>Apellido: </label><br />
                                        <input required className="inputs-one"  type="text" />
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
                                    <Button nameHiro ="Enviar" />
                                </div>
                            </form>
                        </div>
                    </div>
            </ContainerForm>
        )
    }
}

export default Form;