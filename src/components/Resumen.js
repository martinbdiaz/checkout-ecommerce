import React, {useEffect, useState}  from 'react'
import getProducts from '../services/getProducts'
import Item from './Item'
import Formatear from './Formatear'

export default function Resumen(){
    const [productos,setProductos] = useState([])
    const [subTotal,setSubTotal] = useState(0)
    const [total,setTotal] = useState(0)

    useEffect(function(){
        getProducts()
        .then(function(value) {        
            setProductos(value)
        })
        let acumular=0
        productos.forEach(element => acumular+=parseInt(element.price))
        setSubTotal(acumular)
        setTotal(acumular)
        console.log(acumular)
        /*const handleSubmit = evt =>{
            evt.preventDefaul()
        }   
        const handleChange = evt =>{
            setCode(evt.target.value)
            console.log(code)
        }*/
    }, [])//sin dependencias sólo 1 vez

    return(
        <>
            <div className="resumenOrden">
                <h2>RESUMEN DE LA ORDEN</h2>
                {
                    productos.map(producto => <Item key={producto.image} urlimage={producto.image} name={producto.name} price={producto.price}  />)
                }
                <div className="btn">
                    <input type="button" value="Editar"/>
                </div>
                <div className="subtotal">
                    <div>
                        <span>SUBTOTAL</span>
                        <span> <Formatear price={subTotal} /> </span>
                    </div>
                    <div>
                        <span>ENVÍO</span>
                        <span>A calcular</span>
                    </div>
                </div>
                <div className="total">
                    <div>
                        <span>TOTAL</span> 
                        <span><Formatear price={total} /> </span>
                    </div>
                </div>
            </div>     
        </> 
    )
}