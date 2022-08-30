import React from 'react'

const Radio = ({pergunta, options,onChange, value, id, active}) => {
  // console.log(active)

  if(active === false) return null;
  return (
    <fieldset style={{padding: '2rem', marginBottom: '1rem', border: '2px solid #eee',}}>
      <legend style={{fontWeight:'bold'}}>{pergunta}</legend>

      {options.map((option) => 
        <label key={option} style={{marginBottom: '1rem', fontFamily:"monospace"}}>

          <input 
            type="radio" 
            checked={value === option} 
            value={option} 
            onChange={onChange}
            id={id}
            />
              {option}
        </label>
      )}
    </fieldset>
  )
}

export default Radio