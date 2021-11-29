import { useEffect, useState } from 'react'
import ScoreBoard from './components/ScoreBoard.js'
import GameOver from './components/GameOver.js'
import blueCandy from './images/blue-candy.png'
import greenCandy from './images/green-candy.png'
import orangeCandy from './images/orange-candy.png'
import purpleCandy from './images/purple-candy.png'
import redCandy from './images/red-candy.png'
import yellowCandy from './images/yellow-candy.png'
import blank from './images/blank.png'

const App = () => {
  var width = 9
  const moves = 20
  const candyColors = [
  blueCandy,
  greenCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy
  ]
  
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
  const [ scoreDisplay, setScoreDisplay ] = useState(0)
  const [ movesLeft, setMovesLeft ] = useState(moves)
  
  var forbiddenForThree = []
  var tempNum = width - 2
  var firstRow = []
  
  for(let i = 0; i < width; i++) {
    firstRow[i] = i
  }
  
  for(let i = 0; i < width; i++) {
    forbiddenForThree.push(tempNum)
    tempNum++
    forbiddenForThree.push(tempNum)
    tempNum += width - 1
  }
  
  var forbiddenForFour = []
  tempNum = width - 3
  
  for(let i = 0; i < width; i++) {
    forbiddenForFour.push(tempNum)
    tempNum++
    forbiddenForFour.push(tempNum)
    tempNum++
    forbiddenForFour.push(tempNum)
    tempNum += width - 2
  }
  
  var forbiddenForFive = []
  tempNum = width - 4
  for(let i = 0; i < width; i++) {
    forbiddenForFive.push(tempNum)
    tempNum++
    forbiddenForFive.push(tempNum)
    tempNum++
    forbiddenForFive.push(tempNum)
    tempNum++
    forbiddenForFive.push(tempNum)
    tempNum += width - 3
  }

  const checkMidRight = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const midRightShape = [i, i + width, i + width * 2, i + width + 1, i + width + 2]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank

      if(midRightShape.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        midRightShape.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }

  const checkMidLeft = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const midLeftShape = [i + width, i + 2, i + width * 2, i + width * 2 + 1, i + width * 2 + 2]
      const decidedColor = currentColorArrangement[i + 2]
      const isBlank = currentColorArrangement[i + 2] === blank

      if(midLeftShape.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        midLeftShape.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }

  const checkMidDown = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const midDownShape = [i + 1, i + width * 2, i + width * 2 + 1, i + width * 2 + 2, i + width + 1]
      const decidedColor = currentColorArrangement[i + 1]
      const isBlank = currentColorArrangement[i + 1] === blank

      if(midDownShape.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        midDownShape.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }

  const checkMidUp = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const midUpShape = [i, i + 1, i + 2, i + width + 1, i + width * 2 + 1]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank

      if(midUpShape.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        midUpShape.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }
  
  const checkDownRight = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const downRightShape = [i, i + width, i + width * 2, i + width * 2 + 1, i + width * 2 + 2]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank

      if(downRightShape.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        downRightShape.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }

  const checkDownLeft = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const downLeftShape = [i + width * 2, i + width * 2 + 1, i + width * 2 + 2, i + 2, i + width]
      const decidedColor = currentColorArrangement[i + 2]
      const isBlank = currentColorArrangement[i + 2] === blank

      if(downLeftShape.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        downLeftShape.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }

  const checkUpRight = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const upRightShape = [i, i + 1, i + 2, i + width, i + width * 2]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank

      if(upRightShape.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        upRightShape.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }

  const checkUpLeft = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const upLeftShape = [i, i + 1, i + 2, i + 2 + width, i + 2 + width * 2]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank

      if(upLeftShape.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        upLeftShape.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }
  
  const checkColumnOfFive = () => {
    for(let i = 0; i < width * width - 4 * width; i++) {
      const columnOfFive = [i, i + width, i + width * 2, i + width * 3, i + width * 4]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank
      
      if(columnOfFive.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        columnOfFive.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }
  
  const checkRowOfFive = () => {
    for(let i = 0; i < width * width; i++) {
      if(forbiddenForFive.includes(i)) continue
      const rowOfFive = [i, i + 1, i + 2, i + 3, i + 4]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank
      
      if(rowOfFive.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 5)
        rowOfFive.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }
  
  const checkColumnOfFour = () => {
    for(let i = 0; i < width * width - 3 * width; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank
      
      if(columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 4)
        columnOfFour.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }
  
  const checkRowOfFour = () => {
    for(let i = 0; i < width * width; i++) {
      if(forbiddenForFour.includes(i)) continue
      const rowOfFour = [i, i + 1, i + 2, i + 3]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank
      
      if(rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 4)
        rowOfFour.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }
  
  const checkColumnOfThree = () => {
    for(let i = 0; i < width * width - 2 * width; i++) {
      const columnOfThree = [i, i + width, i + width * 2]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank
      
      if(columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 3)
        columnOfThree.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }
  
  const checkRowOfThree = () => {
    for(let i = 0; i < width * width; i++) {
      if(forbiddenForThree.includes(i)) continue
      const rowOfThree = [i, i + 1, i + 2]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank
      
      if(rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 3)
        rowOfThree.forEach(square => currentColorArrangement[square] = blank)
        return true
      }
    }
  }
  
  const moveDown = () => {
    for(let i = 0; i < width * width - width; i++) {
      
      const isFirstRow = firstRow.includes(i)
      
      if(isFirstRow && currentColorArrangement[i] === blank) {
        let randomNum = Math.floor(Math.random() * candyColors.length)
        currentColorArrangement[i] = candyColors[randomNum]
      }
      
      if(currentColorArrangement[i + width] === blank) {
        currentColorArrangement[i + width] = currentColorArrangement[i]
        currentColorArrangement[i] = blank
      }
      
      checkUpRight()
      checkUpLeft()
      checkDownRight()
      checkDownLeft()
      checkMidRight()
      checkMidLeft()
      checkMidDown()
      checkMidUp()
      checkColumnOfFive()
      checkRowOfFive()
      checkColumnOfFour()
      checkRowOfFour()
      checkColumnOfThree()
      checkRowOfThree()
      
    } 
    
  }
  
  const dragStart = (e) => {
    setSquareBeingDragged(e.target)
  }
  
  const dragDrop = (e) => {
    setSquareBeingReplaced(e.target)
  }
  
  const dragEnd = (e) => {
    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
    if(squareBeingReplaced) {
      const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))
      
      currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
      currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')
      
      const validMoves = [
        squareBeingDraggedId - 1,
        squareBeingDraggedId - width,
        squareBeingDraggedId + 1,
        squareBeingDraggedId + width
      ]
      
      const validMove = validMoves.includes(squareBeingReplacedId)
      
      if(squareBeingReplacedId && validMove) {
        const isUpRight = checkUpRight()
        const isUpLeft = checkUpLeft()
        const isDownLeft = checkDownLeft()
        const isDownRight = checkDownRight()
        const isMidRight = checkMidRight()
        const isMidLeft = checkMidLeft()
        const isMidDown = checkMidDown()
        const isMidUp = checkMidUp()
        const isAColumnOfFive = checkColumnOfFive()
        const isARowOfFive = checkRowOfFive()
        const isAColumnOfFour = checkColumnOfFour()
        const isARowOfFour = checkRowOfFour()
        const isAColumnOfThree = checkColumnOfThree()
        const isARowOfThree = checkRowOfThree()
        if(isAColumnOfFive || isARowOfFive || isAColumnOfFour || isARowOfFour || isAColumnOfThree || isARowOfThree || isUpRight ||
          isUpLeft || isDownLeft || isDownRight || isMidRight || isMidLeft || isMidDown || isMidUp) {
          setSquareBeingDragged(null)
          setSquareBeingReplaced(null)
          setMovesLeft((moves) => moves - 1)
          if(!movesLeft) {
            return 'Game Over!'
          }
        } else {
          currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
          currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
          setCurrentColorArrangement([...currentColorArrangement])
        }
      } else {
        currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
        currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
        setCurrentColorArrangement([...currentColorArrangement])
      }
    }
    
  }
  
  const isDraggable = () => {
    if(!movesLeft) {
      return false
    }
  }

  const createBoard = () => {
    console.log(width)
    const randomArrangement = []
    for(let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      if(randomColor === randomArrangement[i-1]) {
        if(randomColor === randomArrangement[i-2] || randomColor === randomArrangement[i+1]) {
          i--;
          continue;
        }
      }
      if(randomColor === randomArrangement[i+1] && randomColor === randomArrangement[i+2]) {
        i--;
        continue;
      }
      if(randomColor === randomArrangement[i-width]) {
        if(randomColor === randomArrangement[i-width*2] || randomColor === randomArrangement[i+width]) {
          i--;
          continue;
        }
      }
      if(randomColor === randomArrangement[i+width] && randomColor === randomArrangement[i+width*2]) {
        i--;
        continue;
      }
      
      randomArrangement[i] = randomColor
    }
    
    setCurrentColorArrangement(randomArrangement)
  }
  
  useEffect(() => {
    createBoard()
  }, [])
  
  useEffect(() => {
    const timer = setInterval(() => {
      checkUpRight()
      checkUpLeft()
      checkDownRight()
      checkDownLeft()
      checkMidRight()
      checkMidLeft()
      checkMidDown()
      checkMidUp()
      checkColumnOfFive()
      checkRowOfFive()
      checkColumnOfFour()
      checkRowOfFour()
      checkColumnOfThree()
      checkRowOfThree()
      moveDown()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 30)
    
    return () => clearInterval(timer)
  }, [checkUpRight, checkUpLeft, checkDownRight, checkDownLeft, checkMidRight, checkMidLeft, checkMidDown, checkMidUp,
    checkColumnOfFive, checkRowOfFive, checkColumnOfFour, checkRowOfFour, checkColumnOfThree, checkRowOfThree, moveDown,
    currentColorArrangement])
    
  return (
      <div className="app">
        <div className="game">
          <GameOver score={scoreDisplay} moves={movesLeft} />
          {currentColorArrangement.map((candyColor, index) => (
            <img key={index} src={candyColor} alt={candyColor} data-id={index} draggable={isDraggable()}
            onDragStart={dragStart} onDragOver={(e) => e.preventDefault()} onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()} onDrop={dragDrop} onDragEnd={dragEnd} className="candy"
            style={{width: String(100/width) + '%', height: String(100/width) + '%'}} />
          ))}
        </div>
        <ScoreBoard score={scoreDisplay} moves={movesLeft} />
      </div>
    );
  }
      
  export default App;
  