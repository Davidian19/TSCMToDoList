import axios from 'axios';
import { useQuery } from 'react-query'
import { useEffect } from 'react';

function ChuckNorrisJoke() {  
    const { data, isLoading, refetch } = useQuery("ChuckNorris", () => {
        return axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response)=>(response.data))
    });

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            refetch();
        }, 5000)
        return ()=>clearInterval(intervalId);
    }, [refetch])

    if(isLoading){
        console.log("loading...")
    }

    return (
        <section style={{width: '400px', marginTop: '16px', opacity: '60%'}}>
            {data && (
                <div key={data.id}>
                    <span style={{fontWeight: 200}}>"{data.value}"</span>
                    <h1 style={{fontSize: '15px'}}>By Chuck Norris.</h1>
                </div>
            )}
        </section>
    )
}

export default ChuckNorrisJoke

