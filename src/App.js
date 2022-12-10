import { useCallback } from "react";

import "./App.css";
import logo from "./logo.svg";

function App() {
    const getGift = useCallback(async () => {
        try {
            const response = await fetch(
                "https://3lirbzsjlvvuwifhqspynr5tq40upork.lambda-url.ap-northeast-1.on.aws/",
                {
                    method: "POST",
                    body: JSON.stringify({
                        time: new Date(2025, 0, 10).toISOString(),
                    }),
                }
            );
            if (response.status === 200)
                alert(`ICS{${(await response.json()).code}}`);
            else alert("Can't get gift before Xmas");
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={getGift}>Get Fat man gift</button>
            </header>
        </div>
    );
}

export default App;
