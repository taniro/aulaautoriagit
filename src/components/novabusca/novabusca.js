import { useQuery } from "react-query"


const Novabusca = ()=> {

    let url = "https://api.sampleapis.com/coffee/hot"

    //let response = useQuery("coffees", getCoffees)
    /*
    data, -> dados obtidos
    error,
    failureCount,
    isError,
    isFetchedAfterMount,
    isFetching,
    isIdle,
    isLoading,
    isPreviousData,
    isStale,
    isSuccess,
    refetch,
    remove,
    status -> “loading”, “error”, “success” ou “idle” 
    */

    const getCoffees = async () => {
        const response = await fetch(url)
        return response.json()
    }

    const { data, status } = useQuery("coffees", getCoffees)

    return <>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <section>{data.map( (c)=> {
                    return <div key={c.id}>
                    <h2 >{c.title}</h2>
                    <p >{c.description}</p>
                    </div>
                } )}</section>

            )}
    </>
}

export default Novabusca;