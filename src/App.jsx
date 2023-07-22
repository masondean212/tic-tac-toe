import { useState, useEffect } from 'react'
import './App.css'
import ButtonHeader from "./components/ButtonHeader.jsx"
import PlayGame from "./components/PlayGame.jsx"

function App() {
  const [playerCount, setPlayerCount] = useState(0);
  const [gameOutput, setGameOutput] = useState([]);
  const [isWin, setIsWin] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("o");

  useEffect(() => {
    console.log(playerCount);
    switch (playerCount) {
      case (0):
        setGameOutput([<ButtonHeader 
          setPlayerCount={setPlayerCount} 
          playerCount={playerCount} 
          isWin={isWin}
          setIsWin={setIsWin}
          currentPlayer={currentPlayer}
         setCurrentPlayer={setCurrentPlayer}/>])
        break;
      case (1):
        setGameOutput([<PlayGame 
          isWin={isWin} 
          setIsWin={setIsWin} />])
        break;
      case (2):
        setGameOutput([<PlayGame 
          isWin={isWin} 
          setIsWin={setIsWin} />])
        break;
      default:
        setGameOutput([<ButtonHeader 
          setPlayerCount={setPlayerCount} 
          playerCount={playerCount} 
          isWin={isWin}
          setIsWin={setIsWin}
          currentPlayer={currentPlayer}
         setCurrentPlayer={setCurrentPlayer}/>])
    }
  }, [playerCount])
  
  useEffect(()=> {(isWin) ? setPlayerCount(3) : null}, [isWin])

return (
  <>
    {gameOutput}
  </>
)
}

export default App
