import "./Toast.style.css";

export default function Toast({toastHandler}) {
    return (
        <div className="notification-container">
            <button onClick={toastHandler}>X</button>
            <div>
                <p className="notification-title">Info :</p>
                <p className="notification-message">
                    You have already added this blog to the bookmarked!
                </p>
            </div>
        </div>
    );
}
