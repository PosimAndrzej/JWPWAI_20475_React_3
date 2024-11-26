import { useState } from "react";
export default function Zad1_good() {
    const[power, setPower] = useState(0);
    function handleClick(){
        setPower(power+1);
    }
    return (
        <div>
            <button onClick={handleClick}>Wyższa potęga</button><br />
            <p>2 ^ {power} = {2**power}</p>
        </div>
        
    );
}