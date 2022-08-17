import { Route, Routes } from 'react-router-dom';
import FavoritesPages from './pages/FavoritesPages';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';


function App() {
  return (
    <>

    <Navigation/>
    <Routes>
          <Route path='/' element={<HomePage/>}  />
          <Route path='/favorites' element={<FavoritesPages/>}  />
    </Routes>
    </>

  );
}

export default App;
