import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Nuestros Productos</h1>
      <ItemListContainer/>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
