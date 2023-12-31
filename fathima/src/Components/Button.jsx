import React from 'react'
import { Link } from 'react-router-dom'


const Button = (props) => {
  return (
    <div>

      <button className="hover:bg-red-500 hover:text-black  border-2 border-red-500 border-red-500 text-white p-2 hover:text-black">
        <Link to={props.link}>
          {props.title}
        </Link>

      </button>

    </div>
  )
}

export default Button