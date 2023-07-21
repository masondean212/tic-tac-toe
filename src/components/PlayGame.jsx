import _ from "lodash"
import { useState, useEffect } from "react";
import imgO from "../assets/O.png";
import imgX from "../assets/X.png";

function PlayGame() {
    const [piecePosition, setPiecePosition] = useState(_.fill(Array(9), "o"))
    const [pieceImages, updatePieceImages] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState("o")
    const elementSize = {
        width: 100,
        height: 100
    };

    function changeState(index) {
        console.log(piecePosition)
        setPiecePosition(_.map(piecePosition, (p, i) => {
            "x"
            // (index === i)
            //     ? ((currentPlayer === "x") ? "x" : "o" )
            //     : p
        }));
        (currentPlayer === "o") 
            ? setCurrentPlayer("x")
            : setCurrentPlayer("o");
        ;
    }

    function pickImage(item, index) {
        console.log(item, index, piecePosition)
        switch (item) {
            case "o":
                return <img src={imgO} />;
            case "x":
                return <img src={imgX} />;
            default:
                return <button
                    style={{ width: "100%", height: "100%" }}
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