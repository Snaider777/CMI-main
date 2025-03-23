import React from 'react'
import Cards from '../components/locale/Cards';

function HomePage() {
  return (
    <div className='HomePage'>
    <Cards 
          title = 'OBJETIVO UNO'
          value = '45%'
          interval = 'Ultimo año'
          trend = 'down'
          data = {[
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380, 360, 400, 380,
            420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
          ]}
      />
      <Cards 
          title = 'OBJETIVO DOS'
          value = '75%'
          interval = 'Ultimo año'
          trend = 'neutral'
          data = {[
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380, 360, 400, 380,
            420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
          ]}
          />
        <Cards 
          title = 'OBJETIVO TRES'
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