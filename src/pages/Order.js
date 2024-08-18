import React, { useState } from 'react';
import './Order.css';
import { FaClipboardList } from "react-icons/fa";

const Order = () => {
    const [showOrderDetails, setShowOrderDetails] = useState(false); // State untuk menampilkan detail order
    const [selectedOrder, setSelectedOrder] = useState(null); // State untuk menyimpan data order yang dipilih

    const orders = [
        {
            id: 110,
            name: 'Minho',
            payment: 'Cash',
            total: 70000,
            items: [
                { name: 'Cappuchino', quantity: 2, price: 30000 },
                { name: 'Americano', quantity: 2, price: 40000 }
            ]
        },
        {
            id: 113,
            name: 'Hyunjin',
            payment: 'Cash',
            total: 30000,
            items: [
                { name: 'Cappuchino', quantity: 2, price: 30000 }
            ]
        },
        // Tambahkan data order lainnya jika diperlukan
    ];

    const handleShowDetails = (order) => {
        setSelectedOrder(order);
        setShowOrderDetails(true);
    };

    const handleCloseDetails = () => {
        setShowOrderDetails(false);
    };

    return (
        <div className="dashboard-container">
            <h1 className="recent-order-title">List Order</h1>
            <table className="order-table order-table-wrapper">
                <thead>
                    <tr>
                        <th>IdUser</th>
                        <th> Customer Name</th>
                        <th>Payment</th>
                        <th>Total</th>
                        <th>Detail Order</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data order akan dimasukkan di sini */}
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.payment}</td>
                            <td>{order.total}</td>
                            <td>
                                {/* Tombol detail order dengan ikon */}
                                <button className="detail-button" onClick={() => handleShowDetails(order)}>
                                    <FaClipboardList className='fa-icon' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Jendela mengapung untuk detail order */}
            {showOrderDetails && (
                <div className="order-details-modal" onClick={handleCloseDetails}>
                    <div className="order-details-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-detail-button" onClick={handleCloseDetails}>&times;</span>
                        <h2>Detail Order</h2>
                        {/* Isi dengan data detail order */}
                        <table className="detail-table">
                            <tbody>
                                <tr>
                                    <td><strong>IdUser:</strong></td>
                                    <td>{selectedOrder.id}</td>
                                </tr>
                                <tr>
                                    <td><strong>Name:</strong></td>
                                    <td>{selectedOrder.name}</td>
                                </tr>
                                <tr>
                                    <td><strong>Payment Method:</strong></td>
                                    <td>{selectedOrder.payment}</td>
                                </tr>
                                <tr>
                                    <td><strong>Total:</strong></td>
                                    <td>{selectedOrder.total}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* Tampilkan daftar menu yang dipesan */}
                        <h3 style={{ marginTop: '20px' }}>Menu Order:</h3>
                        <table className="menu-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedOrder.items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Order;
