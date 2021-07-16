import React from 'react'
import Formatear from './Formatear'

export default function Item({urlimage,name,price}){
    return( 
        <div className="item">
            <div><img src={urlimage} alt={name} /></div>
            <div>{name}</div>
            <div class="precio"><Formatear price={price} /></div>
        </div>
    ) 

}