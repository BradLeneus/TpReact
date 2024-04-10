import React, { useState } from 'react';
import './App.css';

function SideBar({ user }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div style={{height:"90px",width:"40px"}}>
            <button className="btn btn-primary mb-3" onClick={toggleSidebar}>
                {isOpen ? 'Fermer la barre latérale' : 'Ouvrir la barre latérale'}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="btn btn-primary mb-3">Prendre une photo</button>
                <div className="photo-circle mb-3"></div>
                <button className="btn btn-danger mb-3">Déconnexion</button>
                <div className="user-name mb-3">{user.name}</div>
                <img src="../logo.png" alt="logo" className="app-logo mb-3" />
                <div className="info">
                    <div className="email mb-2">{user.email}</div>
                    <div className="specialty mb-2">{user.specialty}</div>
                    <div className="year">{user.year}</div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;