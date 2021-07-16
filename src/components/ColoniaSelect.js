import React  from 'react'

export default function ColoniaSelect({name}){
    return(
        <>
            <option value={name}>{name}</option>
        </>
    ) 
}