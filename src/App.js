import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
             </Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
