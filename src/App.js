import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Portfolio from './pages/Portfolio/Portfolio';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='portfolio/:id' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
