import { useState } from "react";

export const useContador = () => {
  const [valor, setValor] = useState(10)
  const [input, setInput] = useState(1)

  const CambiarEstado = (num) => {
    setValor(Math.max(valor + num, 0))
  }

  return {
    valor,
    setValor,
    CambiarEstado,
    input,
    setInput
  }
}

/*
SUBIR A GIT
git add .
git commit -m "comentario para saber que se cambio o agrego"
git push

CLONAR REPOSITORIO
git clone (copia la url desde code)
*/