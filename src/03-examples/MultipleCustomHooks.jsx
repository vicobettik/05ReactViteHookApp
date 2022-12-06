import React from 'react'
import { useCounter, useFetch } from '../Hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(25);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    console.log({data, isLoading, hasError})

    const { name, id, sprites } = !!data && data;

  return (
    <>
        <h1>Pokémon favorito</h1>  
        <hr />    

        {
          isLoading
            ? (
              <LoadingQuote/>
            )
            : (
              
            <Quote id={id} img={sprites.front_default} name={name} key={id} />)
        }

        <button 
          className='btn btn-primary'
          onClick={ () => { increment(1) } }
          disabled={ isLoading }>
          Next poke
        </button>
        

    </>
  )
}

