import { useState } from "react";

export function Button() {
  const [cont, setCont] = useState(0)

  function incremento(){
    setCont(cont + 1);
    console.log(cont);
  }

  return (
    <button onClick={incremento}>
      {cont}
    </button>
  )
}