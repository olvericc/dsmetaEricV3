import icon from "../../assets/img/notification-icon.svg";
import './styles.css';

function NotificationButton() {
    return (
        <>
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Notify" />
            </div>
        </>
    );
}

export default NotificationButton;
