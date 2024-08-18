import React from 'react';
import './History.css'; // Ubah impor CSS di sini

const History = () => {
    const orders = [
        {
            id: 110,
            items: [
                { name: "Cappuccino", quantity: 2 },
                { name: "Americano", quantity: 2 }

            ],
            customerName: "Minho",
            date: "2024-05-15",
            paymentMethod: "Cash"
        },
        {
            id: 113,
            items: [
                { name: "Cappuccino", quantity: 2 }
            ],
            customerName: "Han jisung",
            date: "2024-04-28",
            paymentMethod: "Cash"
        }
    ];

    return (
        <div className="table-container">
            <h1>Order History</h1>
            <table>
                <thead>
                    <tr>
                        <th>IdUser</th>
                        <th>Menu</th>
                        <th>Jumlah</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>
                                {order.items.map((item, index) => (
                                    <div key={index}>
                                        {item.name}<br />
                                    </div>
                                ))}
                            </td>
                            <td>
                                {order.items.map((item, index) => (
                                    <div key={index}>
                                        {item.quantity}<br />
                                    </div>
                                ))}
                            </td>
                            <td>{order.customerName}</td>
                            <td>{order.date}</td>
                            <td>{order.paymentMethod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default History;
