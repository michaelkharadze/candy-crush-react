const GameOver = ({score, moves}) => {
    if(!moves) {
      return (
          <div style={{'opacity': '75%'}} className="game-over">
              <h2>Game Over!</h2>
          </div>
      )
    }
    return false
  }
  
  export default GameOver;