import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Test kontenerów</h1>
      </div>
      <div className='row'>
        <div className='col-md border border-dark'> 
          col-md
        </div>
        <div className='col-md border border-dark'> 
          col-md
        </div>
        <div className='col-md border border-dark'> 
          col-md
        </div>
      </div>
      <div className='row'>
        <div className='col-sm border border-dark'> 
          col-sm
        </div>
        <div className='col-sm border border-dark'> 
          col-sm
        </div>
        <div className='col-sm border border-dark'> 
          col-sm
        </div>
        <div className='col-sm border border-dark'> 
          col-sm
        </div>
      </div>
      <div className='row'>
          <div className='col-md border border-dark'> 
            col-md
          </div>
          <div className='col-md border border-dark'> 
            col-md
          </div>
          <div className='col-sm-6 border border-dark'> 
            col-sm-6
          </div>
          <div className='col-md border border-dark'> 
            col-md
          </div>
          <div className='col-md border border-dark'> 
            col-md
          </div>
      </div>
      <div className='row'>
        <div className='col border border-dark'> 
          col
        </div>
        <div className='col border border-dark'> 
          col
        </div>
        <div className='col border border-dark'> 
          col
        </div>
        <div className='col border border-dark'> 
          col
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-2 border border-dark'> 
          col-sm-2
        </div>
        <div className='col-sm border border-dark'> 
          col-sm
        </div>
        <div className='col-sm-2 border border-dark'> 
          col-sm-2
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-8 border border-dark'> 
          col-sm-8
        </div>
        <div className='col-sm border border-dark'> 
          col-sm
        </div>
      </div>
      <div>
        <h1>Koniec testu</h1>
      </div>
      
    </>
  )
}

export default App
