import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ 
        <Suspense fallback={<div className='loader'> Loading...</div>}>
          <Login />
        </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;
