import './App.css'
import { traerInfo } from './functions/peticiones'
import { DiAndroid } from "react-icons/di";


function App() {
  const numero = traerInfo()

  return (
    <>
      <h1 className='text-3xl font-bold underline text-red-500'>Hello world!</h1>
      <h1 className='text-3xl font-bold underline text-red-500'>
        {numero}
      </h1>
      <DiAndroid className='text-4xl'/>
    </>
  )
}

export default App
