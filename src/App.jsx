import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome';
import VitePage from './pages/VitePage';
import Books from './pages/Books';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/welcome" element={<Welcome name={'Corentin'} />} />
        <Route path="/vite" element={<VitePage />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
