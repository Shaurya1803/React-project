import headImg from "../assets/head.jpg";
import tailImg from "../assets/tail.jpg";

function Coin({side}){
    return(
        <img width={550} src= {side === "Head" ? headImg : tailImg} alt={side} />
        
    )
}

export default Coin;

