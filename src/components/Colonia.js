import React  from 'react'
import ColoniaSelect from './ColoniaSelect'

export default function Colonia(value){

    if(value.value.length==1){
        return(
            <>
                <input type="text" placeholder="Colonia" disabled value={value.value[0]} id="colony" />
            </> 
        )
    }else if(value.value.length>1){
        return(
            <>
                <select id="colony" >
                {value.value.map(colonia => <ColoniaSelect key={colonia} name={colonia} />)}
                </select>
            </> 
        )
    }else if(value.value.length>1){
        return(
            <>
                    <input type="text" placeholder="Colonia" disabled value="" id="colony" />
            </> 
        )
    }   
}