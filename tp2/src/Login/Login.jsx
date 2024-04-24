import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [pseudo, setPseudo] = useState('');
    const [mdp, setMdp] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Sauvegarde les informations dans le LocalStorage
        localStorage.setItem('username', pseudo);
        localStorage.setItem('password', mdp);

        // Navigue vers la page d'accueil
        navigate('/Main');
    };

    return (
        <div>
            <input
                type="text"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={mdp}
                onChange={(e) => setMdp(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;