import { useState } from "react";

export default function UploadFile() {
    const [fileName, setFileName] = useState("");

    function uploadFile(event) {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    }

    return (
        <div>
            <input type="file" onChange={uploadFile} /><br />
            {fileName && <p>Wczytany plik: {fileName}</p>}
        </div>
    );
}
