import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

function App() {
  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Page 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page2">Page 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page3">Page 3</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page4">Page 4</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page5">Page 5</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Page1 />}></Route>
        <Route path='/page2' element={<Page2 />}></Route>
        <Route path='/page3' element={<Page3 />}></Route>
        <Route path='/page4' element={<Page4 />}></Route>
        <Route path='/page5' element={<Page5 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
