import { useState, useEffect } from 'react'
import './App.css'
import ButtonHeader from "./components/ButtonHeader.jsx"
import PlayGame from "./components/PlayGame.jsx"
function App() {
  const [playerCount, setPlayerCount] = useState(0);
  const [gameOutput, setgameOutput] = useState([]);

  useEffect(() => {
    console.log(playerCount);
    switch (playerCount) {
      case (0):
        setgameOutput([<ButtonHeader setPlayerCount={setPlayerCount} playerCount={playerCount}/>])
        break;
      case (1):
        setgameOutput([<PlayGame />])
        break;
      case (2):
        setgameOutput([<PlayGame />])
        break;
    }
  }, [playerCount])
  

return (
  <>
    {gameOutput}
  </>
)
}

export default App
