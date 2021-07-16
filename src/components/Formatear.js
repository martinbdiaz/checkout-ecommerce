import React, {useEffect, useState}  from 'react'

export default function Formatear({price}){
    const [value,setValue]=useState('')

    useEffect(function(){
        let temporal= String(price)
        if(temporal.length>3){
            let aux1=temporal.slice(0,-3)
            let aux2=temporal.slice(-3)
            temporal='$'.concat(aux1,',',aux2)
        }else{
            temporal='$'.concat(temporal)
        }
        setValue(temporal)
    }, [price])//sin dependencias sólo 1 vez

    return( 
        <>
            {value}.<span className="cent">00</span>
        </>
    ) 

}
