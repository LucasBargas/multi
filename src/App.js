import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Product from './pages/Product/Product';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
