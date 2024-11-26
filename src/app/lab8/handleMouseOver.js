import { useState } from "react";
export default function HandleMouseOver() {
    const[text, setText] = useState("Najedź na mnie!");
    function mouseOver(){
        setText("Najechałeś na mnie!");
    }
    return (
        <div>
            <button onMouseOver={mouseOver}>{text}</button><br />
        </div>
    );
}