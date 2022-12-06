import React from 'react'
import PropTypes from 'prop-types'

export const Quote = ({name, id, img}) => {
  return (
    <>
        <blockquote className='blockquote text-end'>
            <img src={img} alt={name} width="200px"/>
            <p className='mb-1'>#{id}-{ name }</p>
            <footer className='blockquote-footer'>Victor Fuentes Menes</footer>
        </blockquote>
    </>
  )
}