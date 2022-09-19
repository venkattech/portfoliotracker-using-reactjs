import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
// import Search from '/Search/Search';
import Home from './Home/Home';
import StockDetails from './StockDetails/StockDetails';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header></Header>
      

      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/stock/:symbol" element={<StockDetails></StockDetails>}/>
      
      </Routes>

      </BrowserRouter>

      {/*  <Header></Header>
      <Search></Search> */}
    </div>
  );
}

export default App;
