import { useCallback } from "react";

import "./App.css";

function App() {
    const get2021Gift = useCallback(() => alert("PS5 + Last Of Us 2"), []);
    const getGift = useCallback(async () => {
        try {
            const response = await fetch(
                "https://3lirbzsjlvvuwifhqspynr5tq40upork.lambda-url.ap-northeast-1.on.aws/",
                {
                    method: "POST",
                    body: JSON.stringify({
                        time: new Date().toISOString(),
                    }),
                }
            );
            if (response.status === 200)
                alert(`ISTE_CTF{${(await response.json()).code}}`);
            else alert("Can't open gift before Christmas");
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">Yearly X'mas GIFTS !!!</header>
            <div className="buttons">
                <button onClick={get2021Gift} className="gift-button">
                    2021 gift
                </button>
                <button onClick={getGift} className="gift-button">
                    2022 gift
                </button>
            </div>
        </div>
    );
}

export default App;
