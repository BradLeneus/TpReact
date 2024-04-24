import { Route,Router} from 'react-router-dom';
import LoginPage from './Login/Login';
import MainPage from './Main/MainPage';

function App() {
    return (
        <Router>
            <Route path="/Login/LoginPage" element={<LoginPage />}/>
          <Route path="/Main/MainPage" element={<MainPage />} />
        </Router>
    );
}

export default App;