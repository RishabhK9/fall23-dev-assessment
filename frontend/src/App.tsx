import './App.css';
import { Routes, Route } from 'react-router-dom';
import {database} from '../../backend/database.js';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';


function App() {
  return (
    <div>
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
        </Routes>
    </div>
  );
}

export default App;
