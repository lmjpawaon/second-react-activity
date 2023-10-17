import React, {useState, useEffect} from "react";

const useFetch = (url, count) => {
    const [data, setData] = useState(null);
    const fetchPost = async (count) => {
        try{
          const response = await fetch(url + count)
          const content = await response.json()
          setData(content)
        }
        catch(e){
          console.log(e)
        }
        finally{
          console.log('Doners')
        }
    }

    useEffect(() => {
        fetchPost(count)
    }, [count]); 

    return{
        data
    }
}

export default useFetch