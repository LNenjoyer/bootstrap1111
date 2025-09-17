import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Film from './Film.jsx';

function App() {
  
  return (
    <>
      <div class="container">
          <div>
            <h1>Książki dla programisty - moja biblioteczka</h1>
          </div>
          <div className='row'>
            <Film /> 
          </div>
          
        
          <div>
            <h1>informacja o prawach autorskich</h1>
          <p>wszystkie zdjęcia książek oraz opisy pochodzą ze strony https://helion.pl</p>
          </div>			 
      </div>  
    </>
  )
}

export default App
