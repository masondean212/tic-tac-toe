import _ from "lodash"

function CheckWin(piecePosition, currentPlayer) {

    let gameState = ""
    const gameStateArray =_.chain(piecePosition)
        .map(p => {
            if (p === currentPlayer) {
                return "w";
            } else {
                return "l";
            }
        })
        .value()
        _.each(gameStateArray,p => gameState += p)
    const didWin = (gameState.slice(0, 3) === "www"
        || gameState.slice(3, 6) === "www"
        || gameState.slice(6, 9) === "www"  //checks row victory
        || ((gameState[0] === "w")
            && (gameState[3] === "w")
            && (gameState[6] === "w")) //checks col 1
        || ((gameState[1] === "w")
            && (gameState[4] === "w")
            && (gameState[7] === "w")) //checks col 2
        || ((gameState[2] === "w")
            && (gameState[5] === "w")
            && (gameState[8] === "w")) //checks col 3
        || ((gameState[0] === "w")
            && (gameState[4] === "w")
            && (gameState[8] === "w")) //checks down-diagnol
        || ((gameState[2] === "w")
            && (gameState[4] === "w")
            && (gameState[6] === "w"))) //checks up-diagnol

    return didWin;
}
export default CheckWin;