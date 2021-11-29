import axios from "axios";
import { useEffect, useState } from "react";

var submitted = false

const ScoreBoard = ({score, moves}) => {
  const [gameStates, setGameStates] = useState(null)

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/scores')
    const data = Object.keys(response.data.data).map(item => response.data.data[item])
    setGameStates(data)
  }

  const saveData = () => {
    let size = descendingGameStates?.length
    if(score > descendingGameStates[size - 1].score && !submitted) {
      const data = {
        username: String(document.getElementById('username').value),
        score: score
      }

      submitted = true

      axios.post('http://localhost:8000/addscore', data)
          .then(response => {console.log(response)})
          .catch(err => console.log(err))
          .then(fetchData)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const descendingGameStates = gameStates?.sort((a, b) => b.score - a.score)

  return (
      <div className="score-board">
          <h2 style={{'display': 'inline-block'}}>Score: {score}</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2 style={{'display': 'inline-block'}}>Moves: {moves}</h2>
          <br />
          <input style={{'border': '0px'}} id="username" className="username" placeholder="type username"></input> <button style={{'border': '0px'}} onClick={saveData}>Save Score</button>
          <br /><br /><br />
          <h2>High Scores:</h2>
          {descendingGameStates?.map((gameState, index) => (
            <div key={index}>
              <p>{gameState.username}: {gameState.score}</p>
            </div>
          ))}
      </div>
  )
}

export default ScoreBoard;