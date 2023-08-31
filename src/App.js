import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import QrCode from './Components/QRcode/QrCode';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/qr" element={<QrCode/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
