import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';
import CartView from './CartView/CartView';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>}/>
        </Routes>
    </div>
    </BrowserRouter>


  );
}

export default App;
