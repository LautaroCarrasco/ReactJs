import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
/* Import components */
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

/* Import pages */
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/brand/:brand' element={<ItemListContainer/>} />
          <Route path='/productdetails/:id' element={<ProductDetails />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
