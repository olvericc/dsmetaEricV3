import NotificationButton from '../NotificationButton';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BASE_URL } from '../../utils/request';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Sale } from '../../models/sale';

function SalesCard() {
    
    // React Hook -  useState
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState <Sale[]>([]);

    // React Hook - useEffect (requisition)
    useEffect(
        () => {
            axios.get(`${BASE_URL}/sales`)
                .then(response => {
                    setSales(response.data.content);
            });
        }, []
    );
    
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">List of Sales</h2>
                <div>
                    {/* First input */}
                    <div className="dsmeta-form-control-container">
                       <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyy"
                        />
                    </div>

                    {/* Second input */}
                    <div className="dsmeta-form-control-container">
                    <DatePicker 
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Date</th>
                                <th>Seller</th>
                                <th className="show992">Visits</th>
                                <th className="show992">Deals</th>
                                <th>Total</th>
                                <th>Send Notification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map
                                (
                                    sale =>{
                                        return(
                                            <tr key={sale.id}>
                                                <td className="show992">{sale.id}</td>
                                                <td className="show576">{sale.date}</td>
                                                <td>{sale.sellerName}</td>
                                                <td className="show992">{sale.visited}</td>
                                                <td className="show992">{sale.deals}</td>
                                                <td>U$ {sale.amount.toFixed(2)}</td>
                                                <td>
                                                    <div className="dsmeta-red-btn-container">
                                                        <NotificationButton />
                                                    </div>
                                                </td>
                                            </tr> 
                                        )    
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default SalesCard;