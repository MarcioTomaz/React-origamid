import React from 'react'

const Checkbox = ({options, value, setValue, index}) => {

  function handleChange({target}){
    if(target.checked){
      setValue([...value,  target.value]);//pega o valor anterior [..value] e adiciona os de mais com o target.value
    }else{
      setValue(value.filter((itemValue) => itemValue !== target.value))
      //filtrar para se o item é diferente do itemValue assim filtrando o array e retirando o desmarcado
    }
  }

  return (
    <>
    {options.map((option) => 
      <label key={index}>
        <input 
          type="checkbox" 
          value={option} 
          onChange={handleChange}
          checked={value.includes(option)}
          />
          {option}
      </label>)}
    </>
  )
}

export default Checkbox