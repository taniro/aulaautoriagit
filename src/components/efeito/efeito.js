import { useEffect, useState } from "react"

const Efeito = () => {

    const [value, setValue] = useState(0)


    const printlog = ()=>{
        console.log("resize")
    }

    useEffect(()=> {
        console.log("UseEffect")
        window.addEventListener("resize", printlog)
        return () => {
            window.removeEventListener("resize", printlog)
            console.log("CleanUpFunction")
        }

    })

    console.log("Componente renderizado")
    return <>
        <h1>
            {value}
        </h1>
        <button onClick={()=> setValue(value+1)}>Incrementar</button>
        </>
}

export default Efeito;