import React from 'react'
import Flim from './Flim'

const SingleMovie = ({data}) => {
  return (
    <div>
     
     <div className="text-white flex flex-col justify-center items-center gap-4">
    <h1> {data.heading}</h1>
    <p> {data.para}</p>
    <img className="w-44" src={data.src}/>


     </div>
    </div>
  )
}

export default SingleMovie