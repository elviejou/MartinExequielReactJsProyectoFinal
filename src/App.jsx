import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div  className="App">
      <NavBar/>
    </div>
  )
}

export default App
