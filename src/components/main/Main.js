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
                <h1>right sec</h1>
            </div>
        </main>
    );
}
