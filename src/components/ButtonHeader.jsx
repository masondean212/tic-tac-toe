import { useState, useEffect } from "react"
function ButtonHeader({ setPlayerCount, playerCount, isWin, setIsWin, currentPlayer, setCurrentPlayer }) {

    const [outputHeader, setOutputHeader] = useState([])

    useEffect(() => {
        if (isWin) {
            setIsWin(false)
            setOutputHeader([<div>Congrats {currentPlayer.toUpperCase()}!</div>, <div> Want To Play Again?</div>])
        } else {
            setOutputHeader(<div>Number of Players?</div>)
        }
        setCurrentPlayer("o");
    }, [])


    return (
        <div>
            {outputHeader}
            <input type="button" value="1" onClick={() => setPlayerCount(1)} />
            <input type="button" value="2" onClick={() => setPlayerCount(2)} />
        </div>
    )
}

export default ButtonHeader;