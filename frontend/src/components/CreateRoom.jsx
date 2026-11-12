
import RoomInfo from './RoomInfo'

function CreateRoom({ nomeSala, setNomeSala, criarSala, sala }) {
  return (
    <div className="room">
      <h3>Criar minha sala</h3>

      <input
        type="text"
        placeholder="Digite o nome da sala"
        value={nomeSala}
        onChange={(evento) => setNomeSala(evento.target.value)}
      />

      <button onClick={criarSala}>
        Criar sala
      </button>

      <RoomInfo sala={sala} />
    </div>
  )
}

export default CreateRoom
