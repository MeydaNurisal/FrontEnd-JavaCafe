import React from 'react'
import './User.css';
const User = () => {
    return (
        <div className="container-fluid user-container">
            <h1 className="user-title">User List</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID User</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data user ditampilkan di sini */}
                    <tr>
                        <td>110</td>
                        <td>Minho</td>
                        <td>Minho@gmail.com</td>
                        <td>2024-04-30</td>
                    </tr>
                    {/* Tambahkan baris data lain jika diperlukan */}
                    <tr>
                        <td>112</td>
                        <td>Hyunjin</td>
                        <td>Hyunjin@gmail.com</td>
                        <td>2024-04-10</td>
                    </tr>
                    <tr>
                        <td>113</td>
                        <td>Han Jisung</td>
                        <td>Han@gmail.com</td>
                        <td>2024-04-12</td>
                    </tr>
                    <tr>
                        <td>114</td>
                        <td>Changbin</td>
                        <td>Changbin@gmail.com</td>
                        <td>2024-04-10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User;
