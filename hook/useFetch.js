import axios from "axios"
import { useEffect, useState } from "react"

const rapidapiKey = '2ecf899a9amshabcf05c96a08afap194ca0jsna66f157ef985'


const useFetch  = (endpoint, query) => {
    const [data, setData] = useState([]),
        [isLoading, setIsLoading] = useState(false),
        [error, setError] = useState(null),
        options = {
            method: 'GET',
            url: `https://jsearch.p.rapidapi.com/${endpoint}`,
            params: {
                ...query
            },
            headers: {
                'X-RapidAPI-Key': rapidapiKey,
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
      };

    const callEndpointFunction = async () => {
        setIsLoading(true)
        try {
           const response =  await axios.request(options)
           setData(response.data.data)
           setIsLoading(false)
        } catch (error) {
            setError(error);
            alert('There is an error')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        callEndpointFunction()
    }, [])

    const reFetch = () => {
        setIsLoading(true)
        callEndpointFunction()
    }
    return {
        data,
        error,
        isLoading
    }
}

export default useFetch;