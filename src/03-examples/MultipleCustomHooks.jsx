import React from 'react'
import { useFetch } from '../Hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {} = useFetch('​https://www.breakingbadapi.com/api/quotes/1');

  return (
    <>
        <h1>Breaking bad Quotes</h1>  
        <hr />    
    </>
  )
}

