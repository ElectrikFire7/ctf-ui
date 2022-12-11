import { useCallback, useState } from "react";

import "./App.css";
import santa from "./santa.png";

function App() {
    const [page2] = useState(window.location.href.split("?")[1] === "q=2");

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
            {page2 ? (
                <div className="container">
                    <img src={santa} className="santa" alt="santa" />
                    <a
                        href="https://drive.google.com/file/d/1ddYAQpT_9gyYFCl-GE7XVSAkIgylYNAd/view?usp=sharing"
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        .
                    </a>
                </div>
            ) : (
                <>
                    <header className="App-header">
                        Yearly X'mas GIFTS !!!
                    </header>
                    <div className="buttons">
                        <button onClick={get2021Gift} className="gift-button">
                            2021 gift
                        </button>
                        <button onClick={getGift} className="gift-button">
                            2022 gift
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
