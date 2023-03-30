import Card from "../card/Card";
import "./Main.style.css";

export default function Main() {
    return (
        <main id="main-sec">
            <div id="card-container">
                <Card />
                <Card />
                <Card />
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
