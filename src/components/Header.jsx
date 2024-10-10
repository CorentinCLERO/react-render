import { useLocation } from 'react-router-dom';

const Header = () => {
  let location = useLocation();

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${location.pathname.includes('welcome') && 'active'}`}
            aria-current="page"
            href="/welcome"
          >
            Welcome Page
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname.includes('vite') && 'active'}`} href="/vite">
            Vite Page
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname.includes('books') && 'active'}`} href="/books">
            Books Page
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname.includes('register') && 'active'}`} href="/register">
            Register Page
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname.includes('login') && 'active'}`} href="/login">
            Login Page
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
