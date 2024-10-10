import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome';
import VitePage from './pages/VitePage';
import Books from './pages/Books';
import Header from './components/Header';
import BookDetails from './pages/BookDetails';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/welcome" element={<Welcome name={'Corentin'} />} />
        <Route path="/vite" element={<VitePage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
