import { useState } from "react";
import Coin from './Coin'



function Flipcoin(){
    const [CurrFace, setCurrFace ] = useState("Head");

    function handleFlip(){
        var  randomNumber = Math.random()
        let face = randomNumber <= 0.5 ? "Head" : "Tail" 
        setCurrFace(face);



    }
   
    return(
        <div>
            <Coin side={CurrFace} />
            <button onClick={handleFlip}>FlipCoin</button>
        </div>
    )
}

export default Flipcoin;