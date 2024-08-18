import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { TbCoffee, TbCoffeeOff } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";

const Dashboard = () => {
    // State untuk menyimpan jumlah pesanan yang belum selesai
    const [ongoingOrdersCount, setOngoingOrdersCount] = useState(1);
    // State untuk menyimpan jumlah pesanan yang sudah selesai
    const [doneOrdersCount, setDoneOrdersCount] = useState(0);
    // State untuk menyimpan daftar pesanan yang belum selesai
    const [ongoingOrders, setOngoingOrders] = useState([
        { id: 110, name: 'Minho', total: 24000 },
    ]);

    // Fungsi untuk menyelesaikan pesanan
    const handleOrderDone = (orderId) => {
        // Lakukan logika untuk menyelesaikan pesanan di sini
        console.log(`Order ${orderId} telah diselesaikan.`);
        // Perbarui jumlah pesanan yang sudah selesai
        setDoneOrdersCount(prevCount => prevCount + 1);
        // Perbarui daftar pesanan yang belum selesai dengan menghapus pesanan yang baru saja diselesaikan
        setOngoingOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
        // Perbarui jumlah pesanan yang belum selesai dengan mengurangi satu
        setOngoingOrdersCount(prevCount => prevCount - 1);
    };

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="card-container">
                {/* Tambahkan Link untuk navigasi ke halaman Orders */}
                <Link to="/order" className="card">
                    <div className="card-content">
                        <div className="icon" style={{ color: 'black' }}><TbCoffee /></div>
                        <div className="counter" style={{ color: 'black' }}>{ongoingOrdersCount}</div> {/* Tampilkan jumlah pesanan yang belum selesai */}
                    </div>
                    <div className="description" style={{ color: 'black' }}>Orders</div>
                </Link>
                <div className="card">
                    <div className="card-content">
                        <div className="icon"><TbCoffeeOff /></div>
                        <div className="counter" >{doneOrdersCount}</div> {/* Tampilkan jumlah pesanan yang sudah selesai */}
                    </div>
                    <div className="description">Done</div>
                </div>
                {/* Tambahkan Link untuk navigasi ke halaman Message */}
                <Link to="/message" className="card">
                    <div className="card-content">
                        <div className="icon" style={{ color: 'black' }}><LuMessagesSquare /></div>
                        <div className="counter" style={{ color: 'black' }}>3</div>
                    </div>
                    <div className="description" style={{ color: 'black' }}>Message</div>
                </Link>
                {/* Tambahkan Link untuk navigasi ke halaman Orders */}
                <Link to="/history" className="card">
                    <div className="card-content">
                        <div className="icon" style={{ color: 'black' }}><IoBagHandleOutline /></div>
                        <div className="counter" style={{ color: 'black' }}>4</div>
                    </div>
                    <div className="description" style={{ color: 'black' }}> Total Orders</div>
                </Link>
            </div>

            <h1 className="recent-order-title">Recent Order</h1>
            <table className="order-dashboard-table order-table-wrapper">
                <thead>
                    <tr>
                        <th>IdUser</th>
                        <th> Customer Name</th>
                        <th>Total</th>
                        <th>Detail Order</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data order akan dimasukkan di sini */}
                    {ongoingOrders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.total}</td>
                            <td>
                                {/* Tambahkan kelas CSS "done-button" ke tombol "Done" */}
                                <button
                                    onClick={() => handleOrderDone(order.id)}
                                    className="done-button"
                                >
                                    Done
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;
