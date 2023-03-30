import author from "../../assets/images/Faridul-Islam.jpg";
import vector from "../../assets/images/Vector.png";
import "./Card.style.css";

export default function Card() {
    return (
        <div className="card">
            <img
                className="card-img"
                src="https://media.istockphoto.com/id/1425828458/photo/young-man-uses-multiple-computers-while-coding-developing-web-site.jpg?s=1024x1024&w=is&k=20&c=FCJlhBKIesJCAEawttVQGE7HSXguNnMx5B-EUIFujP4="
                alt=""
            />
            <div className="card-header">
                <div className="author-details">
                    <img className="author-img" src={author} alt="" />
                    <h5 className="author-name">Mr. Raju</h5>
                    <p className="publish-date">Mar 14 (4 Days ago)</p>
                </div>
                <button className="min-read">
                    05 min read{" "}
                    <img
                        src={vector}
                        style={{ height: "18px", width: "15px" }}
                        alt=""
                    />
                </button>
            </div>
            <h1 className="card-title">
                How to get your first job as a self-taught programmer
            </h1>
            <div className="hash-tag">
                {" "}
                <a href="#/">#beginners</a> <a href="#/">#programming</a>
            </div>
            <button className="read-mark-btn">Mark as read</button>
        </div>
    );
}
