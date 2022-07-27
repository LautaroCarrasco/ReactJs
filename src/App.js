import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Aqui apareceran todos los productos, actualmente no tenemos productos"/>
    </div>
  );
}

export default App;
