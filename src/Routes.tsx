import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function Router() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </>
  );
}

export default Router;
