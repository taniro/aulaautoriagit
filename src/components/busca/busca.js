import { useEffect, useState } from "react"

const Busca = () => {


    //let url = "https://api.sampleapis.com/coffee/hot"
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

    const [data, setData] = useState([])

    const getCoffees = async () => {
        const response = await fetch(url)
        const coffes =  await response.json()
    
        /*
        const results = coffes.results

        for (const r of results){
            console.log(r.name)
        }
        */

        //console.log(coffes)
        setData(coffes.results)
    }

    useEffect( () => {
        getCoffees()
    }, [])


    return <>
    
        <section>{data.map( (c)=> {
            return <>
            <h2>{c.name}</h2>
            <p>{c.url}</p>
            </>
        } )}</section>
    
    </>
}

export default Busca;