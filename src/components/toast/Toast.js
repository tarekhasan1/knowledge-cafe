import "./Toast.style.css";

export default function Toast({toastHandler}) {
    return (
        <div className="notification-container">
            <button onClick={toastHandler}>X</button>
            <div>
                <p className="notification-title">Alert</p>
                <p className="notification-message">
                You Have Already Bookmarked This Blog!
                </p>
            </div>
        </div>
    );
}
