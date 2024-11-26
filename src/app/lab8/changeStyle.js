import { useState } from "react";

export default function ChangeStyle() {
    const [style, setStyle] = useState({
        padding: "10px",
        color: "black",
        backgroundColor: "aqua",
        fontSize: "20px"
    });

    function changeStyle() {
        const newStyle = { ...style };
        if(newStyle.backgroundColor === "aqua"){
            newStyle.backgroundColor = "red";
            newStyle.fontSize = "26px";
        }
        else{
            newStyle.backgroundColor = "aqua";
            newStyle.fontSize = "20px";
        }
        setStyle(newStyle);
    }

    return (
        <div>
            <button style={style} onClick={changeStyle}>
                Kliknij, aby zmienić styl
            </button>
        </div>
    );
}
