import { useState, useEffect } from "react"
function ButtonHeader({ setPlayerCount, isWin, setIsWin }) {

    const [outputHeader, setOutputHeader] = useState([])

    useEffect(() => {
        if (isWin.winState) {
            switch(isWin.player) {
                case "e":
                    setOutputHeader([<div>It's a tie!</div>, <div> Want To Play Again?</div>])
                    break;
                default:
                    setOutputHeader([<div>Congrats {isWin.player.toUpperCase()}!</div>, <div> Want To Play Again?</div>])
                    break;
            }
            
        } else {
            setOutputHeader(<div>Number of Players?</div>)
        }
    }, [])

    function gameStart(numberOfPlayers) {
        setIsWin({winState: false, player: "e"});
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