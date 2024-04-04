import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route> 
            <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}></Route> 
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route> 
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<h1>404 not found</h1>}></Route>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
