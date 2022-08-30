
import React from 'react'

const Input2 = ({label, id, setValue,onChange,  value, type, onBlur, placeholder, error}) => {//desestruturando o label, e o props
  return (
    <>
      <label key={id}>
        {label}
        <input 
          id={id} 
          name={id}
          onChange={ onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          type={type}  
          value={value}
          />
          {value}
      </label>
      {error && <p>{error}</p>}
    </>
  )
}

export default Input2