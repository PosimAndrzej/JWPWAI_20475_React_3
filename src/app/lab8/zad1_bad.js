import { useState } from "react";
export default function Zad1_bad() {
    let power = 0;
    function handleClick(){
        power = power + 1;
    }
    return (
        <div>
            <button onClick={handleClick}>Wyższa potęga</button><br />
            <p>2 ^ {power} = {2**power}</p>
        </div>
        
    );
}