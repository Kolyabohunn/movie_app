import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Details from './components/Details';
import Home from './routes/Home';
import About from './routes/About';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="movie-detals" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
