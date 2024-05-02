import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddProduct from './pages/AddProduct';
import NavLayout from './components/NavLayout';
function MainRoutes() {
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route path='/' element={<Main />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;