import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedLoggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        // Ici, vous pouvez mettre votre logique de vérification du nom d'utilisateur et du mot de passe
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
            navigate('/home'); // Rediriger vers la page d'accueil après connexion réussie
        } else {
            alert('Identifiants incorrects');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/login'); // Rediriger vers la page de connexion après déconnexion
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Bienvenue, {username} !</h2>
                    <button onClick={handleLogout}>Déconnexion</button>
                </div>
            ) : (
                <div>
                    <h2>Connexion</h2>
                    <input
                        type="text"
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Se connecter</button>
                </div>
            )}
        </div>
    );
};

export default Auth;
