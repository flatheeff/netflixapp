import React, { useState } from 'react'

const SampleForm = () => {
    const [AddValue, setAddValue] = useState("")
     const [AddWord, setAddWord] = useState([])
     
     const myfun=(e)=>{
        e.preventDefault()
        setAddWord([...AddWord,AddValue])
        setAddValue("")

     }



     
    return (
        <div className='text-white font-bold text-xl'>

            <form>
                <input onChange={(event) =>{setAddValue(event.target.value)} } value={AddValue} className='text-black type-text' />
                <button onClick={myfun}   className='border-2 mx-2  text-2xl'>

                    
                    submit
               </button>

                {

                    AddWord.map((data)=>(
                         <p>{data}</p>


                    ))


                    
                }
            
            </form>

        </div>
    )
}

export default SampleForm