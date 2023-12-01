import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import OfertaSensataProvider from './Context';

const App = () => {
  return (
    <BrowserRouter>
      <OfertaSensataProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </OfertaSensataProvider>
    </BrowserRouter>
  );
};

export default App;

