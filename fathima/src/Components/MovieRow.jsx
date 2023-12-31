import React,{useEffect,useState} from 'react'
import Movie from './Movie'

const MovieRow = () => {
     
      
  const [data, setData] = useState([])

  useEffect(() => {
    console.log("hello world")
    fetch("https://65912fcd8cbbf8afa96bf37b.mockapi.io/bird")
      .then((res) => res.json)
      .then((res2) => {
        console.log(res2)
        setData(res2)
      })
    })




    return (
    <div>
        {/*title*/}
       <div className='text-white text-2xl font-bold'>Categaroy Name</div>
       {/*card*/}
       <div className='flex gap-5 py-5'>

       </div>
       {
          data.map((a) => (
            <Movie data ={a} />
          )
          )
      }

    </div>
  )
}

export default MovieRow