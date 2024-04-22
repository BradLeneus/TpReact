import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Ici, vous pouvez mettre votre logique de vérification du nom d'utilisateur et du mot de passe
        if (username === 'admin' && password === 'admin123') {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/home');
        } else {
            alert('Identifiants incorrects');
        }
    };

    return (
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
    );
};

export default Login;
