import React, { useState } from 'react';
import '../css/checkout.css';
import { useMutation } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

interface DeliveryDetailsPopupProps {
    details: {
        address: string;
        username: string;
        email: string;
        phoneNumber: string;
        totalAmount: string;
        plants: string[];
    };
    onClose: () => void;
}

const DeliveryDetailsPopup: React.FC<DeliveryDetailsPopupProps> = ({ details, onClose }) => {
    const [currentDetails, setDetails] = useState(details);

    const saveData = useMutation({
        mutationKey: 'SAVEDATA',
        mutationFn: (requestData: any) => {
            return axios.post('http://localhost:8080/order/order', requestData, {});
        },
        onSuccess: () => {
            toast.success('Delivery will be within 2-3 days!');
        },
        onError: () => {
            toast.error('Failed to add. Please try again.');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        saveData.mutate(currentDetails);
        onClose();
    };

    return (
        <div className="delivery-details-popup">
            <h2>Delivery Details</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Address:
                    <input
                        type="text"
                        value={currentDetails.address}
                        onChange={(e) => setDetails({ ...currentDetails, address: e.target.value })}
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        value={currentDetails.username}
                        onChange={(e) => setDetails({ ...currentDetails, username: e.target.value })}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        value={currentDetails.email}
                        onChange={(e) => setDetails({ ...currentDetails, email: e.target.value })}
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        value={currentDetails.phoneNumber}
                        onChange={(e) => setDetails({ ...currentDetails, phoneNumber: e.target.value })}
                    />
                </label>

                <p>Plants: {currentDetails.plants.join(', ')}</p>
                <p>Total Amount: Rs {currentDetails.totalAmount}</p>

                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default DeliveryDetailsPopup;
