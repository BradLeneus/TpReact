import React from 'react';

const Home = ({ setIsLoggedIn }) => {
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <div>
            <h2>Bienvenue sur la page d'accueil</h2>
            <button onClick={handleLogout}>Déconnexion</button>
        </div>
    );
};

export default Home;
