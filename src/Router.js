import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VerticalNav from './components/Nav/VerticalNav';
import Main from './pages/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <VerticalNav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
