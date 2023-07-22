import _ from "lodash"
import { useState, useEffect } from "react";
import imgO from "../assets/O.png";
import imgX from "../assets/X.png";
import CheckWin from "./CheckWin.jsx"
function PlayGame({ isWin, setIsWin }) {
    const [piecePosition, setPiecePosition] = useState(_.fill(Array(9), "e"))
    const [pieceImages, updatePieceImages] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState("n");
    const elementSize = {
        width: 100,
        height: 100
    };

    function switchPlayer() {
        if (currentPlayer === "o") {
            setCurrentPlayer("x");
        } else {
            setCurrentPlayer("o");
        }
    }

    function nextGamePhase(index) {
        const placeHolderForPosition = _.map(piecePosition, (p, i) => {
            return ((index === i)
                ? ((currentPlayer === "x") ? "x" : "o")
                : p);
        });
        setPiecePosition(placeHolderForPosition);
    }




    function pickImage(item, index) {
        switch (item) {
            case "o":
                return <img style={elementSize} src={imgO} />;
            case "x":
                return <img style={elementSize} src={imgX} />;
            default:
                return <button
                    style={elementSize}
                    onClick={() => nextGamePhase(index)} />;
        }
    }

    useEffect(() => {
        updatePieceImages(_.map(piecePosition, (p, i) => pickImage(p, i)));
        console.log("I changed piece Image from:",  piecePosition)
    }

        , [piecePosition]);

    useEffect(() => {
        console.log(currentPlayer);
        if (CheckWin(piecePosition, currentPlayer)) {
            console.log("WINNER!");
            (currentPlayer === "x")
            ? setIsWin({ winState: true, player: "o" })
            : setIsWin({ winState: true, player: "x" });
        } else if (_.some(piecePosition, p => p === "e")) {
            switchPlayer(currentPlayer);
        } else {
            
            setIsWin({ winState: true, player: "e" });
        };
        console.log("I got pieceposition:" , piecePosition,currentPlayer)
    }, [pieceImages]);

    useEffect(()=>console.log(isWin)
    ,[currentPlayer]);

    return (
        <table>
            <tbody>
                <tr>
                    <td style={elementSize}>{pieceImages[0]}</td>
                    <td style={elementSize}>{pieceImages[1]}</td>
                    <td style={elementSize}>{pieceImages[2]}</td>
                </tr>
                <tr>
                    <td style={elementSize}>{pieceImages[3]}</td>
                    <td style={elementSize}>{pieceImages[4]}</td>
                    <td style={elementSize}>{pieceImages[5]}</td>
                </tr>
                <tr>
                    <td style={elementSize}>{pieceImages[6]}</td>
                    <td style={elementSize}>{pieceImages[7]}</td>
                    <td style={elementSize}>{pieceImages[8]}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PlayGame;