import _ from "lodash"
import { useState, useEffect } from "react";
import imgO from "../assets/O.png";
import imgX from "../assets/X.png";
import CheckWin from "./CheckWin.jsx"
function PlayGame({ isWin , setIsWin }) {
    const [piecePosition, setPiecePosition] = useState(_.fill(Array(9), "e"))
    const [pieceImages, updatePieceImages] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState("o")
    
    const elementSize = {
        width: 100,
        height: 100
    };

    function changeState(index) {
        const placeHolderForPosition = _.map(piecePosition, (p, i) => {
            return ((index === i)
                ? ((currentPlayer === "x") ? "x" : "o" )
                : p)
        })
        setPiecePosition(placeHolderForPosition);
        if (CheckWin(placeHolderForPosition,currentPlayer)) {
            setIsWin(true);
        } else {
        (currentPlayer === "o") 
            ? setCurrentPlayer("x")
            : setCurrentPlayer("o");
        }
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
                    onClick={()=>changeState(index)} />;
        }
    }
    useEffect(() => {
        updatePieceImages(_.map(piecePosition, (p, i) => pickImage(p, i)));
    }
        , [piecePosition])
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