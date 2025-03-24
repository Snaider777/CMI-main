import React from 'react'
import Cards from '../components/locale/Cards';
import '../styles/HomePageStyle.css';

function HomePage() {
  return (
    <div className='CardsContainer'>
    <Cards 
          title = 'Objetivo uno'
          value = '45%'
          interval = 'Ultimo año'
          trend = 'down'
          data = {[
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380, 360, 400, 380,
            420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
          ]}
      />
      <Cards 
          title = 'Objetivo dos'
          value = '75%'
          interval = 'Ultimo año'
          trend = 'neutral'
          data = {[
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380, 360, 400, 380,
            420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
          ]}
          />
        <Cards 
          title = 'Objetivo tres'
          value = '95%'
          interval = 'Ultimo año'
          trend = 'up'
          data = {[
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380, 360, 400, 380,
            420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
          ]}
          />
    </div>
  )
}

export default HomePage;