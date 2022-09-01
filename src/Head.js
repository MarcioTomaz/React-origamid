import React from 'react'

const Head = (props) => {

  React.useEffect( () => {
    console.log(props);
    document.title = 'Dogs | ' + props.title;
    document
    .querySelector('meta[name="description"]')
    .setAttribute('content', props.description)
  }, [props])

  return (
    <>

    </>
  )
}

export default Head