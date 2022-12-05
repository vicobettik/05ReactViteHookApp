import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    // console.log('Message montado');
    const onMouseMove = ({x,y}) => {
      const coords = {x, y};
      console.log(coords);
    }
    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
      // console.log('Message desmontado')
      window.removeEventListener('mousemove', onMouseMove)
    }

  }, []);

  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}

