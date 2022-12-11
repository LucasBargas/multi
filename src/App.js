import React, { useRef, useEffect } from 'react';
import Header from './layouts/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Modal from './layouts/Modal/Modal';
import Footer from './layouts/Footer/Footer';
import BtnReturn from './layouts/ButtonReturn/ButtonReturn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const sections = useRef();

  return (
    <BrowserRouter>
      <Header sections={sections} />
      <Routes>
        <Route path="/" index element={<HomePage sections={sections} />} />
      </Routes>
      <Footer />
      <Modal />
      <BtnReturn />
    </BrowserRouter>
  );
};

export default App;
