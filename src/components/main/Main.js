import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./Main.style.css";

export default function Main() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [spentTime, setSpentTime] = useState(0);
    const [bookmarked, setBookmarked] = useState([]);
    const [showToast, setShowToast] = useState(false);

    // get the fake data
    useEffect(() => {
        const getData = async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await fetch("cardData.json");
                const data = await response.json();
                setCardData(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log(error);
            }
        };
        getData();
    }, []);

    // spent time handler
    const spentTimeHandler = (min) => {
        const time = parseInt(min);
        time && setSpentTime((previousTime) => previousTime + min);
    };

    // bookmarked handler
    const bookmarkedHandler = (blogName) => {
        if (!bookmarked.includes(blogName)) {
            setShowToast(false);
            setBookmarked((preMarked) => [...preMarked, blogName]);
        } else {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
    };

    const methods = {
        spentTimeHandler,
        bookmarkedHandler,
    };

    return (
        <main id="main-sec">
            <div id="card-container">
                {loading && <h1>Loading...</h1>}
                {!error &&
                    !loading &&
                    Array.isArray(cardData) &&
                    cardData.length > 0 &&
                    cardData.map((card) => (
                        <Card key={card.id} data={card} methods={methods} />
                    ))}
                {error && <h2>There was an error to get data!</h2>}
            </div>
            <div id="right-sidebar">
                <div id="spent-time">
                    <p>Spent time on read: {spentTime} min</p>
                </div>
                <div id="bookmarked-lists">
                    <h3>Bookmarked Blogs : {bookmarked?.length}</h3>
                    {Array.isArray(bookmarked) &&
                        bookmarked.length > 0 &&
                        bookmarked.map((title) => (
                            <p className="bookmarked-name">{title}</p>
                        ))}
                </div>
            </div>
            {showToast && <h1>Show Toast</h1>}
        </main>
    );
}
