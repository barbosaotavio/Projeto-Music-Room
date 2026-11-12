
import { useState } from 'react'
import './App.css'

function App() {
  const [salaCriada, setSalaCriada] = useState(false)

  function criarSala() {
    setSalaCriada(true)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎧 Music Room</h1>
        <p>Sua música, seus amigos, sua sala.</p>
      </header>

      <main className="main">
        <h2>Bem-vindo ao Music Room!</h2>

        <p>
          Crie uma sala e compartilhe suas músicas
          favoritas com seus amigos.
        </p>

        <div className="room">
          <h3>Minha sala de música</h3>

          {salaCriada ? (
            <p>Sua sala foi criada com sucesso! 🎵</p>
          ) : (
            <p>Você ainda não criou uma sala.</p>
          )}

          <button onClick={criarSala}>
            Criar sala
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
