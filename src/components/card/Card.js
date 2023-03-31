import vector from "../../assets/images/Vector.png";
import "./Card.style.css";

export default function Card({ data, methods }) {
    const {
        author_name,
        blog_title,
        blog_cover_image,
        author_image,
        read_time,
        publish_date,
        hash_tags,
    } = data;
    const { spentTimeHandler, bookmarkedHandler } = methods;

    return (
        <div className="card">
            <img className="card-img" src={blog_cover_image} alt="" />
            <div className="card-header">
                <div className="author-details">
                    <img className="author-img" src={author_image} alt="" />
                    <h5 className="author-name">{author_name}</h5>
                    <p className="publish-date">{publish_date}</p>
                </div>
                <div className="min-read">
                    {`${
                        read_time < 10 ? `0${read_time}` : read_time
                    } min read`}
                    <img
                        className="bookmark"
                        onClick={() => bookmarkedHandler(blog_title)}
                        src={vector}
                        style={{ height: "18px", width: "15px" }}
                        alt=""
                    />
                </div>
            </div>
            <h1 className="card-title">{blog_title}</h1>
            <div className="hash-tag">
                {Array.isArray(hash_tags) &&
                    hash_tags.length > 0 &&
                    hash_tags.map((tag, index) => (
                        <a key={index} href="#/">
                            #{tag}
                        </a>
                    ))}
            </div>
            <button
                className="read-mark-btn"
                onClick={() => spentTimeHandler(read_time)}
            >
                Mark as read
            </button>
        </div>
    );
}
