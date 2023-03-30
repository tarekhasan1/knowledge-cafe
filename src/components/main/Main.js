import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./Main.style.css";

export default function Main() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await fetch("../../../fakeData.json");
                const data = await response.json();
                setCardData(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <main id="main-sec">
            <div id="card-container">
                {loading && <h1>Loading...</h1>}
                {!error &&
                    !loading &&
                    Array.isArray(cardData) &&
                    cardData.length > 0 &&
                    cardData.map((card) => <Card data={card} />)}
                {error && <h2>There was an error to get data!</h2>}
            </div>
            <div id="right-sidebar">
                <div id="spent-time">
                    <p>Spent time on read: {177} min</p>
                </div>
                <div id="bookmarked-lists">
                    <h3>Bookmarked Blogs : {8}</h3>
                    <p className="bookmarked-name">
                        Master Microsoft Power Platform and Become an In-Demand!
                    </p>
                </div>
            </div>
        </main>
    );
}
