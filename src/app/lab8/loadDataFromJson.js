import { useState } from "react";

export default function LoadDataFromJson() {
    const [data, setData] = useState(null);

    async function loadDataFromJson() {
        try {
            const response = await fetch("json/dane.json");
            const jsonData = await response.json();
            setData({ ...jsonData, loaded: true });
        } catch (error) {
            console.error("Error loading JSON data:", error);
        }
    }

    return (
        <div>
            <button onClick={loadDataFromJson}>Załaduj dane z JSON</button><br />
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
