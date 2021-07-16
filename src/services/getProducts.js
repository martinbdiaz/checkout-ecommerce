import axios from 'axios';

export default function getProducts(){
    const url='https://blackisp.herokuapp.com/products'
    return axios.get(url)
        .then(res => {
        const resultado=res.data.map(resultado=>{
            const {name, price, image}=resultado
            return {name, price, image}
        })
        return resultado
    })
}