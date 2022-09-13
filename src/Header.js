import React from 'react'

const Header = () => {
  console.log('Renderizou')
  return (
    <h1>Header</h1>
  )
}

export default React.memo(Header)