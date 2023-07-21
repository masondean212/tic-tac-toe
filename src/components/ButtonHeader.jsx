
function ButtonHeader({ setPlayerCount , playerCount }) {
    
    return(
        <div>
            <div>Number of Players?</div>
            <input type="button" value="1" onClick={() => setPlayerCount(1)}/>
            <input type="button" value="2" onClick={() => setPlayerCount(2)}/>
        </div>
    )
}

export default ButtonHeader;