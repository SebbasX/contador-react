import '../styles/Contador.css';
import { useContador } from '../hooks/useContador';

export const Contador = () => {

  const { valor, setValor, CambiarEstado, input, setInput } = useContador()

  return (
    <>
      <div className='estilo-contador'>
        <h2>{valor}</h2>
      </div>
      <div className='estilo-botones'>
        <button className='boton-cambio' onClick={() => CambiarEstado(+ input)}>SUMAR {input}</button>
        <button className='boton-cambio' onClick={() => CambiarEstado(- input)}>RESTAR {input}</button>
        <button className='boton-cambio' onClick={() => setValor(10)}>REINICIAR</button>
      </div>
      <div className='estilo-in'>
        <input type='number' className='input-digitar' value={input} onChange={(e) => setInput(Number(e.target.value))}></input>
      </div>
      <div className='estilo-botones'>
        <button className='boton-cambio' onClick={() => setInput(1)}>REINICIAR</button>
      </div>
      { input === 7 ?
        <h1 style={{color: 'red'}}>SIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU</h1>
        : <></>
      }
    </>
  )
}