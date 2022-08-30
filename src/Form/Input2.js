
import React from 'react'

const Input2 = ({label, id, setValue,onChange, value, ...props}) => {//desestruturando o label, e o props
  return (
    <>
      <label key={id}>
        {label}
        <input 
          type="text" 
          id={id} 
          name={id}
          onChange={ onChange}
          {...props}
          />
          {value}
      </label>
    </>
  )
}

export default Input2