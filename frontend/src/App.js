import './App.css';
import HomePage from './screenPages/HomePage';
import ProductPage from './screenPages/ProductPage';
import CartPage from './screenPages/CartPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SigninPage from './screenPages/SigninPage';
import { useSelector } from 'react-redux';
import RegisterPage from './screenPages/RegisterPage';
import ProductsPage from './screenPages/ProductsPage';

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open");
}

const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open")
}

const App = () => {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">

            <button onClick={openMenu}>
              &#9776;
            </button>

            <Link to="/" >FutureTech.</Link>
          </div>

          <div className="header-links">
            <a href="cart.html">Cart</a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }

          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>

          <button className="sidebar-close-button" onClick={closeMenu}>x</button>

          <ul>
            <li>
              <a href="index.html" className="menuListItem">Pants</a>
            </li>

            <li>
              <a href="index.html" className="menuListItem">Shirts</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/products" component={ProductsPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/" exact={true} component={HomePage} />
          </div>

        </main>

        <footer className="footer">
          All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
