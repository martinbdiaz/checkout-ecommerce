import React, {useEffect, useState}  from 'react'
import get from '../services/get'
import location from '../images/location.PNG';
import Colonia from './Colonia'

export default function Direccion({code}){
    const [resultado,setResultado]=useState([])
    
    useEffect(function(){
        get({code})
        .then(function(value) {
            if(Object.keys(value).length){
                setResultado(value)
            }else{
                setResultado({})
            }
        })
    }, [code])

    if(Object.keys(resultado).length != 0  ){
        return(
            <>
                <div>    
                    <img src={location} alt="" />
                    <Colonia value={resultado.colonies} />
                </div>
                <div>    
                    <img src={location} alt="" />
                    <input type="text" placeholder="Estado/Región" disabled  value={resultado.state}  id="state" />
                </div>
                <div>    
                    <img src={location} alt="" />
                    <input type="text" placeholder="Ciudad" disabled  value={resultado.city}  id="city"/>
                </div>
                <div>    
                    <img src={location} alt="" />
                    <input type="text" placeholder="Delegación o municipio" disabled  value={resultado.town}  id="town" />
                </div>
            </> 
        )
    }else{
        return(
            <>
                <div>    
                    <img src={location} alt="" />
                    <input type="text" placeholder="Colonia" disabled value="" id="colony" />
                </div>
                <div>    
                    <img src={location} alt="" />
                    <input type="text" placeholder="Estado/Región" disabled value="" id="state" />
                </div>
                <div>    
                    <img src={location} alt="" />
                    <input type="text" placeholder="Ciudad" disabled value="" id="city" />
                </div>
                <div>    
                    <img src={location} alt="" />
                    <input type="text" placeholder="Delegación o municipio" disabled value="" id="town" />
                </div>
            </> 
        )
    }   
}