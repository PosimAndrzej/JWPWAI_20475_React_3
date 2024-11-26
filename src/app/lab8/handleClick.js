import { useState } from "react";
export default function HandleClick() {
    const[ile, setIle] = useState(0);
    function handleClick(){
        setIle(ile+1);
    }
    return (
        <div>
            <button onClick={handleClick}>{ile}</button><br />
        </div>
        
    );
}