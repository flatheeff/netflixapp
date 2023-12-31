
import React from 'react'
import Button from './Components/Button';
const Navbar = () => {
    document.getElementById("");
    function myfunction() {
        console.log("clicked");


    }





    return (
        <div className="flex p-5 justify-between text-lg items-center ">
            <img className='md:w-44 w-20 ' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <div className="md:flex flex-row  hidden gap-5 items-center">
                <p className='hover:text-red-600 text-white'>Home</p>
                <p className='hover:text-red-600 text-white'>Contact</p>
                <select className='text-lg border-2 border-balck text-black bg-red-500'>
                    <option value="english">English</option>
                    <option value="malayalam">Malayalam</option>
                    <option value="korea">Korea</option>
                    <option value="franch">franch</option>
                </select>
                <Button title="SignIn" link="/SignUp" />
                <Button title="SignUp" link="/LogIn" />



            </div>
            <div id="name" onClick={myfunction} className="md:hidden text-white items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>




        </div>
    )
}
export default Navbar