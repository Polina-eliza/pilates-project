import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";

import './App.css';


function App() {

  return (
    <BrowserRouter>
    <div className="app-container">
      <Navbar />
    </div>
    </BrowserRouter>
  
  )
}

export default App;
