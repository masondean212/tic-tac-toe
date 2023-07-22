import { useState, useEffect } from 'react'
import './App.css'
import ButtonHeader from "./components/ButtonHeader.jsx"
import PlayGame from "./components/PlayGame.jsx"

function App() {
  const [playerCount, setPlayerCount] = useState(0);
  const [gameOutput, setGameOutput] = useState([]);
  const [isWin, setIsWin] = useState({winState: false, player: "e"}); //using "e" to represent neither player

  useEffect(() => {
    console.log(playerCount);
    switch (playerCount) {
      case (0):
        setGameOutput([<ButtonHeader
          setPlayerCount={setPlayerCount}
          playerCount={playerCount}
          isWin={isWin}
          setIsWin={setIsWin}/>])
        break;
      case (1):
        setGameOutput([<PlayGame
          isWin={isWin}
          setIsWin={setIsWin}/>])
        break;
      case (2):
        setGameOutput([<PlayGame
          isWin={isWin}
          setIsWin={setIsWin}/>])
        break;
      default:
        setGameOutput([<ButtonHeader
          setPlayerCount={setPlayerCount}
          playerCount={playerCount}
          isWin={isWin}
          setIsWin={setIsWin}/>])
        break;
    }
  }, [playerCount])

  useEffect(() => { ((isWin.winState) ? setPlayerCount(3) : null);}, [isWin])

  return (
    <>
      {gameOutput}
    </>
  )
}

export default App
