import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color){
  //   setColor(color);
  // }



  return (
    <div className='div1' style={{backgroundColor:color}}>
      <div >
        <div >

          <button onClick={() => setColor('red')}> red </button>
          <button className='button2' onClick={() => setColor('blue')}> Green</button>
          <button className='button2' onClick={() => setColor('violet')}> Green</button>
          <button className='button2' onClick={() => setColor('black')}> Green</button>

        </div>
      </div>
    </div>
  )
}

export default App
