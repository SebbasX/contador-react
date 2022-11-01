import React, { useState } from 'react';
import styled from 'styled-components';

/*
SUBIR A GIT
git add .
git commit -m "comentario para saber que se cambio o agrego"
git push

CLONAR REPOSITORIO
git clone (copia la url desde code)
*/

export const Contador = () => {

  const [valor, setValor] = useState(10)
  const [input, setInput] = useState(1)

  const CambiarEstado = (num) => {
    setValor(Math.max(valor + num, 0))
  }

  return (
    <>
      <EstiloContador>
        <h2>{valor}</h2>
      </EstiloContador>
      <EstiloBotones>
        <button className='boton-cambio' onClick={() => CambiarEstado(+ input)}>SUMAR {input}</button>
        <button className='boton-cambio' onClick={() => CambiarEstado(- input)}>RESTAR {input}</button>
        <button className='boton-cambio' onClick={() => setValor(10)}>REINICIAR</button>
      </EstiloBotones>
      <EstiloIn>
        <input type='number' className='input-digitar' value={input} onChange={(e) => setInput(Number(e.target.value))}></input>
      </EstiloIn>
      <EstiloBotones>
        <button className='boton-cambio' onClick={() => setInput(1)}>REINICIAR</button>
      </EstiloBotones>
      { input === 7 ?
        <h1 style={{color: 'red'}}>SIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU</h1>
        : <></>
      }
    </>
  )
}

const EstiloContador = styled.div`
  background-color: black;
  color: aquamarine;
  border: .3rem solid aquamarine;
  text-align: center;
  justify-content: center;
`
const EstiloBotones = styled.div`
  background-color: black;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  .boton-cambio {
    background-color: black;
    color: aquamarine;
    border-radius: 25px;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
  }
  .boton-cambio:hover {
    background-color: aquamarine;
    color: black;
  }
`
const EstiloIn = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  border: .1rem solid black;
`