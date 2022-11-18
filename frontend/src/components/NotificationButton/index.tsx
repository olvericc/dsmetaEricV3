import axios from 'axios';
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId : number;
}

function handleClick(id : number){
    axios.get(`${ BASE_URL }/sales/${ id }/notification`)
    .then(response =>{
        console.log("success");
    })
}

function NotificationButton( {saleId} : Props ) {
    return (
        <>
            <div className="dsmeta-red-btn" 
            onClick={() => {
                handleClick(saleId)
            }}>
                <img src={icon} alt="Notify" />
            </div>
        </>
    );
}

export default NotificationButton;
