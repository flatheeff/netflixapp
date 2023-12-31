import React from 'react'
import Feature from './Feature'
import Faq from '../Faq'
import Section  from '../Section'


const MainPage = () => {
  return (
    <div>
       
       <Section/>
         
         <Feature no={1} heading="heading1" para="lore ipsum" videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
         <Feature no={2} heading="heading1" para="lore ipsum" videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
         <Feature no={3} heading="heading1" para="lore ipsum" videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
         <Feature no={4} heading="heading1" para="lore ipsum" videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
         <Faq/> 
    </div>
  )
}

export default MainPage