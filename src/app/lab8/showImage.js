import { useState } from "react";

export default function ShowImage() {
    const [imageSrc, setImageSrc] = useState("");

    function showImage() {
        setImageSrc("images/kot.png");
    }

    return (
        <div>
            <button onClick={showImage}>Pokaż obrazek</button><br />
            {imageSrc && <img src={imageSrc} alt="Kot" />}
        </div>
    );
}
