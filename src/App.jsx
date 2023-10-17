import { useState, useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Post from './components/Post'
import useFetch from './hooks/useFetch';

function App() {
  const [count, setCount] = useState(1)
  // const [post, setPost] = useState("");
  const {data} = useFetch('https://jsonplaceholder.typicode.com/posts/',count)



  // const fetchPost = async (count) => {
  //   try{
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+count)
  //     const data = await response.json()
  //     setPost(data)
  //   }
  //   catch(e){`  `
  //     console.log(e)
  //   }
  //   finally{
  //     console.log('Doners')
  //   }
    
  // }

  // useEffect(() => {
  //   // fetch('https://jsonplaceholder.typicode.com/posts/'+count)
  //   // .then((response) => response.json())
  //   // .then((data)=> setPost(data))
  //   // .catch((error)=> console.log(error))
  //   // fetchPost(count)
  // }, [count]);

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      {data && <Post title={data.title} body={data.body}/>}
      {count}
      <div className='flex items-center gap-3 mt-3'>
        {Array.from({length:5}).map((value,index)=>{
          return (
            <div key={`pagination-${index+1}`} className=' p-2 border font-bold hover:cursor-pointer' onClick={()=>setCount(index+1)}>
              {index+1}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
