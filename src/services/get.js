import axios from 'axios';

export default function get({code='0'}){
    if(String(code).trim()==""){
        code=0
    }
    const url='https://blackisp.herokuapp.com/postalCodes/'+code
    return axios.get(url)
        .then(res => {        
        return res.data
    })
}