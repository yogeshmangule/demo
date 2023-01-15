
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
     <Login/>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
