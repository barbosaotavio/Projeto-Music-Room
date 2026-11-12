
function RoomInfo({ sala }) {
  if (!sala) {
    return null
  }

  return (
    <div className="room-info">
      <h3>Sala criada com sucesso! 🎵</h3>

      <p>Nome: {sala.nome}</p>

      <p>
        Código da sala:
        <strong> {sala.codigo}</strong>
      </p>

      <p>Compartilhe esse código com seus amigos!</p>
    </div>
  )
}

export default RoomInfo
