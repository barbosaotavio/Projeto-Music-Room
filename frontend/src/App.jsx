
import { useState } from 'react'
import Header from './components/Header'
import CreateRoom from './components/CreateRoom'
import './App.css'

function App() {
  const [nomeSala, setNomeSala] = useState('')
  const [sala, setSala] = useState(null)

  function criarSala() {
    if (nomeSala.trim() === '') {
      alert('Digite um nome para sua sala!')
      return
    }

    const codigo = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()

    setSala({
      nome: nomeSala,
      codigo: codigo
    })
  }

  return (
    <div className="app">
      <Header />

      <main className="main">
        <h2>Bem-vindo ao Music Room!</h2>

        <p>
          Crie uma sala e compartilhe suas músicas
          favoritas com seus amigos.
        </p>

        <CreateRoom
          nomeSala={nomeSala}
          setNomeSala={setNomeSala}
          criarSala={criarSala}
          sala={sala}
        />
      </main>
    </div>
  )
}

export default App
