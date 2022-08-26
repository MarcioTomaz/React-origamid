import React from 'react'


  /* 
    Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.
  */
function Input({label, id, ...props}) {

  return (
    <div style={{margin: '1rem 0'}}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props}/>

    </div>
  )
}

export default Input