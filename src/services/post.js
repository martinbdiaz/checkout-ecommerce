import axios from 'axios';

export default function post(name,lastName,email,phone,postalCode,colony,state,city,town,address){
    const url=' https://blackisp.herokuapp.com/contact'
    let datos= {name,lastName,email,phone,postalCode,colony,state,city,town,address}

    function limpiar(){
      document.getElementById('name').value=""
      document.getElementById('lastName').value=""
      document.getElementById('email').value=""
      document.getElementById('phone').value=""
      document.getElementById('postalCode').value=""
      document.getElementById('state').value=""
      document.getElementById('city').value=""
      document.getElementById('town').value=""
      document.getElementById('address').value=""
    }

    axios.post(url,datos)
    .then(res => {
        limpiar()
        alert('Datos Enviados de manera exitosa')
      })
}