import { useState, useEffect } from "react"
function ButtonHeader({ setPlayerCount, isWin, setIsWin, currentPlayer, setCurrentPlayer }) {

    const [outputHeader, setOutputHeader] = useState([])

    useEffect(() => {
        if (isWin) {
            setIsWin(false)
            setOutputHeader([<div>Congrats {currentPlayer.toUpperCase()}!</div>, <div> Want To Play Again?</div>])
        } else {
            setOutputHeader(<div>Number of Players?</div>)
        }
    }, [])

    function gameStart(numberOfPlayers) {
        setCurrentPlayer("o");
        setPlayerCount(numberOfPlayers);
    }
    return (
        <div>
            {outputHeader}
            <input type="button" value="1" onClick={() => gameStart(1)} />
            <input type="button" value="2" onClick={() => gameStart(2)} />
        </div>
    )
}

export default ButtonHeader;