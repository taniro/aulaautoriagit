import { useEffect, useState } from "react";


const Counter = () => {


    const [cont, setCont] = useState(0)



    const zerarValor = (valor) => {
        setCont(valor)
    }

    const incrementaDepoisDeHumSegundo = () =>{
        setTimeout(()=> {
            setCont((prev)=> {
                return prev + 1
            })
        }, 2000)
    }

    return <>
            <h2>{cont}</h2>
            <button onClick={() => setCont(cont+1)}>Incrementar</button>
            <button onClick={() => zerarValor(0)}>Reset</button>
            <button onClick={()=> setCont(cont-1)}>Decrementar</button>
            <button onClick={() => incrementaDepoisDeHumSegundo()}>Incrementar Depois</button>
            </>
}

export default Counter;