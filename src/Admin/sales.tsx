import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/sales.css";

interface Order {
    id: string;
    address: string;
    username: string;
    email: string;
    phoneNumber: string;
    totalAmount: string;
    plants: string[];
    status?: string;
}

const Sales: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Order[]>(`http://localhost:8080/order/getAll`);
                console.log('API Response:', response.data);

                if (Array.isArray(response.data) && response.data.length > 0) {
                    setOrders(response.data);
                } else {
                    console.error('Invalid response structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchData();
    }, []);

    const getStatusFromLocalStorage = (orderId: string): string => {
        return localStorage.getItem(`orderStatus_${orderId}`) || '';
    };

    const handleStatusToggle = (orderId: string) => {
        const updatedOrders = orders.map((order) => {
            if (order.id === orderId) {
                const newStatus = order.status === 'pending' ? 'paid' : 'pending';
                const updatedOrder = { ...order, status: newStatus };

                localStorage.setItem(`orderStatus_${orderId}`, newStatus);

                return updatedOrder;
            }
            return order;
        });

        setOrders(updatedOrders);
    };

    return (
        <main className='grid-container'>
            <section className='sales-main_container'>
                <div className='sales_details'>
                    <h3>Sales Details</h3>
                    <div className='main-box_sales'>
                        <div className='detail-box_sales'>
                            <span>Name</span>
                            <span>Address</span>
                            <span>Email</span>
                            <span>Phone Number</span>
                            <span>Plants</span>
                            <span>Total Amount</span>
                            <span>Status</span>
                        </div>

                        {orders.map((order) => (
                            <div className='user-details_sales' key={order.id}>
                                <div>
                                    <label>{order.username}</label>
                                </div>
                                <div>
                                    <label>{order.address}</label>
                                </div>
                                <div>
                                    <label>{order.email}</label>
                                </div>
                                <div>
                                    <label>{order.phoneNumber}</label>
                                </div>
                                <div>
                                    {/* Map over the plants array to display each plant */}
                                    {order.plants.map((plant, index) => (
                                        <span key={index}>{plant}</span>
                                    ))}
                                </div>
                                <div>
                                    <label>{order.totalAmount}</label>
                                </div>
                                <div className='status-sales_admin'>
                                    <button onClick={() => handleStatusToggle(order.id)}>
                                        {getStatusFromLocalStorage(order.id) || order.status === 'pending' ? 'Paid' : 'Pending'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Sales;
