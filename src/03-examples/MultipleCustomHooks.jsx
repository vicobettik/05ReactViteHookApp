import React from 'react'
import { useFetch } from '../Hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');

    console.log({data, isLoading, hasError})

  return (
    <>
        <h1>Breaking bad Quotes</h1>  
        <hr />    
    </>
  )
}

