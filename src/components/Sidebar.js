import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaShoppingBag
} from "react-icons/fa";
import { FaCircleUser,FaBorderAll } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { BiSolidMessageAltDetail} from "react-icons/bi";
import { NavLink, Outlet } from 'react-router-dom';
import { RiLogoutCircleRFill } from "react-icons/ri";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path:"/user",
            name:"User",
            icon:<FaCircleUser />
        },
        {
            path:"/order",
            name:"Order",
            icon:<FaBorderAll />
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/history",
            name:"History",
            icon:<GiCoffeeCup />
        },
        {
            path:"/message",
            name:"Message",
            icon:<BiSolidMessageAltDetail />
        },
        {
            path:"/login",
            name:"Logout",
            icon:<RiLogoutCircleRFill />
        },
    ]

    return (
        <div className="container">
            <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">JAVACOFFE</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            {children} {/* Menampilkan konten di bawah sidebar */}
            <main>
                <Outlet /> {/* Outlet untuk menampilkan halaman-halaman */}
            </main>
        </div>
    );
};

export default Sidebar;
