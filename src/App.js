import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'; 
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route> 
        <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}></Route> 
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route> 
        <Route path='*' element={<h1>404 not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
