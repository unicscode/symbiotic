import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, NotFound } from './components/pages';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hi" element={<div>hi</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
