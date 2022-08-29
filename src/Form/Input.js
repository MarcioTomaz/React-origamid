
import React from 'react'

const Input = ({label, id, setValue, value, ...props}) => {//desestruturando o label, e o props
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input 
          type="text" 
          id={id} 
          name={id}
          // value={value}
          onChange={ ({ target }) => setValue(target.value)}
          // required={required}
          {...props}
          />
      </label>
    </>
  )
}

export default Input