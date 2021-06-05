import './App.css';
import HomePage from './screenPages/HomePage';
import ProductPage from './screenPages/ProductPage';
import CartPage from './screenPages/CartPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SigninPage from './screenPages/SigninPage';
import { useSelector } from 'react-redux';
import RegisterPage from './screenPages/RegisterPage';
import ProductsPage from './screenPages/ProductsPage';
import ShippingPage from './screenPages/ShippingPage';
import PaymentPage from './screenPages/PaymentPage';
import PlaceorderPage from './screenPages/PlaceorderPage';
import ProfilePage from './screenPages/ProfilePage';
import LaptopsPage from './screenPages/LaptopsPage';
import MobilePhonesPage from './screenPages/MobilePhonesPage';
import HeadphonesPage from './screenPages/HeadphonesPage';
import AccessoriesPage from './screenPages/AccessoriesPage';
import TvsPage from './screenPages/TvsPage';
import OtherPage from './screenPages/OtherPage';

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
            <Link to="/">FutureTech.</Link>
          </div>

          <div className="header-links">
            <Link to="/cart">Cart</Link>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }

          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>

          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <div className="categoriesList">
            <div>
              <Link to="/filter/laptops" className="menuListItem">/Laptops</Link>
            </div>
            <br />
            <div>
              <Link to="/filter/mobilephones" className="menuListItem">/Mobile Phones</Link>
            </div>
            <br />
            <div>
              <Link to="/filter/headphones" className="menuListItem">/Headphones</Link>
            </div>
            <br />
            <div>
              <Link to="/filter/accessories" className="menuListItem">/Accessories</Link>
            </div>
            <br />
            <div>
              <Link to="/filter/tvs" className="menuListItem">/TV's</Link>
            </div>
            <br />
            <div>
              <Link to="/filter/other" className="menuListItem">/Other</Link>
            </div>
          </div>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/profile" component={ProfilePage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/placeorder" component={PlaceorderPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/filter/laptops" component={LaptopsPage} />
            <Route path="/filter/mobilephones" component={MobilePhonesPage} />
            <Route path="/filter/headphones" component={HeadphonesPage} />
            <Route path="/filter/accessories" component={AccessoriesPage} />
            <Route path="/filter/tvs" component={TvsPage} />
            <Route path="/filter/other" component={OtherPage} />
          </div>
        </main>

        <footer className="footer">
          All rights reserved.
        </footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
