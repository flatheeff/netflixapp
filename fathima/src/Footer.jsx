import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="p-4 bg-black md:p-8 lg:p-10 ">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
         
        
          
          <img className='md:w-44 w-20' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
      </a>
      <p class="my-6 text-white dark:text-gray-400">Open-source library of over 400+ web components and interactive elements built for better web.</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white text-white">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" class="hover:underline">Netflix</a>. All Rights Reserved.</span>
  </div>
</footer>
    </div>
  )
}

export default Footer