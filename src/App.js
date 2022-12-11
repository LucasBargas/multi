import React, { useRef, useEffect } from 'react';
import Header from './layouts/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Modal from './layouts/Modal/Modal';
import Footer from './layouts/Footer/Footer';
import BtnReturn from './layouts/ButtonReturn/ButtonReturn';

const App = () => {
  const sections = useRef();

  useEffect(() => {
    console.log(sections.current);
  }, []);

  return (
    <>
      <Header sections={sections} />
      <HomePage sections={sections} />
      <Footer />
      <Modal />
      <BtnReturn />
    </>
  );
};

export default App;
