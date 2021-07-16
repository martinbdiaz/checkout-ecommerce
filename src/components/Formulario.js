import React, {useEffect, useState}  from 'react'
import get from '../services/get'
import profile from '../images/profile.PNG';
import phone from '../images/phone.PNG';
import mail from '../images/mail.PNG';
import location from '../images/location.PNG'
import location2 from '../images/location-2.PNG';
import Direccion from './Direccion';
import post from '../services/post';


export default function Formulario(){
    const [code,setCode]= useState(0)

    const handleSubmit = evt =>{
        //evt.preventDefaul()
        if(validar("name", "texto")){
            if(validar("lastName", "texto")){
                if(validar("email", "correo")){
                    if(validar("phone", "numero")){
                        if(validar("postalCode", "postal")){
                            if(validar("address", "todo")){
                                post(document.getElementById('name').value,
                                    document.getElementById('lastName').value,
                                    document.getElementById('email').value,
                                    document.getElementById('phone').value,
                                    document.getElementById('postalCode').value,
                                    document.getElementById('colony').value,
                                    document.getElementById('state').value,
                                    document.getElementById('city').value,
                                    document.getElementById('town').value,
                                    document.getElementById('address').value)
                            }
                        }
                    }
                }
            }
        }
    }   

    function validar(id, tipo="texto") {
        let pattern = new RegExp('^[A-Z]+$', 'i');
        let mensaje=''
        if(tipo=='texto'){
            mensaje="El campo solo puede contener letras. Recuerda no agregar letras acentuadas y/o letra ñ"
        }else if(tipo=='numero'){
            mensaje="El campo solo puede contener valores númericos"
            pattern = new RegExp('[0-9]+');
        }else if(tipo=='postal'){
            mensaje="Por favor válide el formato del codigo postal"
            pattern = new RegExp('[0-9]+');
        }else if(tipo=='correo'){
            mensaje="Por favor válide el formato de correo electrónico. ejemplo@gmail.com"
            pattern = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
        }
        let isValid = false;
        const input = document.getElementById(id)
        const message = document.getElementById('message');   
        if(!input.value) {
          isValid = false;
          message.innerText ="No pueden existir campos vacios"
        } else {
            if(tipo=='todo'){
                isValid = true;
            }else{
                if(!pattern.test(input.value)){ 
                    isValid = false;
                } else {
                    isValid = true;
                }
            }
        }
        if(!isValid) {
          input.style.borderColor = 'salmon'; 
          message.innerText =mensaje
        }else {
          input.style.borderColor = '#00000036'; 
          message.innerText = '';
        }
        return isValid;
    }

    const handleChange = evt =>{
        setCode(evt.target.value)
    }

    return(
        <>
            <div className="detalleEnvio">
                <h2>DIRECCIÓN DE ENVÍO</h2>
                <form>
                    <div>    
                        <img src={profile} alt="" />
                        <input type="text" placeholder="Nombre" id="name" />
                    </div>
                    <div>    
                        <img src={profile} alt="" />
                        <input type="text" placeholder="Apellidos" id="lastName"/>
                    </div>
                    <div>    
                        <img src={mail} alt="" />
                        <input type="email" placeholder="Correo Electrónico" id="email"/>
                    </div>
                    <div>    
                        <img src={phone} alt="" />
                        <input type="number" placeholder="Número de teléfono" id="phone"/>
                    </div>
                    <div>    
                        <img src={location} alt="" />
                        <input type="text" placeholder="Código postal" onKeyUp={handleChange}  id="postalCode"/>
                    </div>

                    <Direccion code={code} />
                            
                    <div>
                        <img src={location2} alt="" />
                        <input type="text" placeholder="Calle" id="address" />
                    </div>

                    <div id="message"></div>
                    

                    <div className="btn">
                        <input type="button" value="Libreta de direcciones" />
                        <input type="button" value="Guardar" onClick={handleSubmit} />
                    </div>

                    <div className="check-facturacion">
                        <input type="checkbox" />
                        <span>Utilizar como dirección de facturación</span>
                    </div>
                </form>
            </div>

        </> 
    )
}