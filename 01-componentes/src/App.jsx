import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importando o component:
import FunctionalComponent from './components/FunctionalComponent'
// Importando o component de classe:
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'

function App() {

  return (
    <>
      <h1>Hello World React</h1>
      {/* Comentário */}
      {/* Todo component é chamado via tag HTML */}
      <FunctionalComponent />
      <ClassComponent />
      {/* Para passar valores numéricos (Ou qualquer outro que não seja string) passar o valor entre {} */}
      <PropsExample nome="Jefferson" idade={27}/>
    </>
  )
}

export default App
