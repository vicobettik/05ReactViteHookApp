import React, { useState, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export const Quote = ({name, id, img}) => {

  const pRef = useRef();

  const [boxSize, setboxSize] = useState(
    {
      width: 0,
      height: 0
    }
  );

  useLayoutEffect(() => {
    const { width,height } = pRef.current.getBoundingClientRect();
    setboxSize(
      {
        width,
        height
      }
    )
  }, [name]);

  return (
    <>
        <blockquote 
          className='blockquote text-end'
          style={{ display: 'flex' }}>
            <img src={img} alt={name} width="200px"/>
            <p 
              className='mb-1'
              ref={pRef}>#{id}-{ name }</p>
            <footer className='blockquote-footer'>Victor Fuentes Menes</footer>
        </blockquote>

        <code>{ JSON.stringify(boxSize) }</code>

    </>
  )
}