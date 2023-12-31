import React from 'react'
import Film from './Flim'
import SingleMovie from './SingleMovie'




  




    const SingleRow = () => {

      const TotalMovie = [
        {
          heading: "Stranger Thing",
          para: "Demogorgon",
          src: "https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg",

        },

        {

          heading: "End Game",
          para: "Marvel Studio",
          src: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",


        },

        {
          heading: "No Way Home",
          para: "Marvel Studio",
          src: "https://images-cdn.ubuy.co.in/6502d8fad41d96757f66f08e-hukobj-superhero-spiderman-no-way-home.jpg",

        },
        {
          heading: "Avatar",
          para: "The Way Of Water",
          src: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61O8KP0CYVS._AC_UF1000,1000_QL80_.jpg",

        },
        {
          heading: "AquaMan",
          para: "The Lost Kingdom",
          src: "https://m.media-amazon.com/images/M/MV5BMTkxM2FiYjctYjliYy00NjY2LWFmOTEtMWZiYWRjNjA4MGYxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",

        },
        {
          heading: "The Last Voyage Of The Demeter",
          para: "Dracula Is Born",
          src: "https://m.media-amazon.com/images/M/MV5BNjM1ZjdjNzQtN2I2ZC00OGVhLTg1MGItMzJkOWMxZWU0MTcyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",

        },
        {
          heading: "All Of Us Are Dead",
          para: "School Out For The Apooalypse",
          src: "https://www.themoviedb.org/t/p/original/8jUlLqqPVkO7tRtZsGYjWteJJeR.jpg",

        },




      ]

      return (
        <div>
          {/* title */}
          <div className="text-white text-3xl font-bold gap-5 py-4">
            Category Name
          </div>
          {/* cards */}

          <div className=' w-55 flex flex-row gap-5 '>

           





            {/*SinglaMovie*/}


          </div>

        </div>
      )
    }

    export default SingleRow








