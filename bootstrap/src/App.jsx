import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
          <div>
            <h1>Książki dla programisty - moja biblioteczka</h1>
          </div>
      
        <div class="row">
          <div class="col">				
            <p>zawartość jednego bloku w wierszu</p>
              
          </div>

        </div>
        
          <div>
            <h1>informacja o prawach autorskich</h1>
          <p>wszystkie zdjęcia książek oraz opisy pochodzą ze strony https://helion.pl</p>
          <div>			
        
      </div>





      {/* <div>
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
      </div> */}
      
    </>
  )
}

export default App
