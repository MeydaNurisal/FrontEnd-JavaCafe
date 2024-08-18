import React from 'react'
import './User.css';

const Message = () => {
    return (
        <div className="container-fluid user-container">
            <h1 className="user-title">Message</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID User</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message  </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data user ditampilkan di sini */}
                    <tr>
                        <td>112</td>
                        <td>Hyunjin</td>
                        <td>Hyunjin@gmail.com</td>
                        <td>아주 맛있는 sangat enakk sekali jinjaa</td>
                    </tr>
                    {/* Tambahkan baris data lain jika diperlukan */}
                </tbody>
            </table>
        </div>
    )
}

export default Message;
