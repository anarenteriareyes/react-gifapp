import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState(''); //el estado inicial es un string vacio
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
        //aqui se manda el valor del input para que actualice el ESTADO del inputValue que 
        // hace referencia al input, es decir lo que el usuario escriba es enviado para que sea renderizado por el input
    }

    const hadleSubmit = (e) =>{
        e.preventDefault(); //evitar el refresh del navegador
        if(inputValue.trim().length > 2){
            setCategories(cats => [ inputValue, ...cats]); //mandando llamar el metodo desde el elemento padre 
            setInputValue('');
        }
       
    }
    return (
        <form onSubmit= { hadleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange= { handleInputChange }>    

            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
