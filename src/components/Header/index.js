import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-main-container">
    <div className="icon-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="logo-size"
        alt="website logo"
      />
      <button type="button" className="button-logout">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="icon-image-size"
          alt="nav logout"
        />
      </button>
    </div>
    <div className="web-links-container">
      <Link to="/" className="home-link-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          className="icon-image-size"
          alt="nav home"
        />
      </Link>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        className="icon-image-size"
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        className="icon-image-size"
        alt="nav cart"
      />
    </div>
    <div className="top-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="top-logo-size"
        alt="website logo"
      />
    </div>
    <ul className="links-container">
      <li>
        <Link to="/" className="home-link-item">
          Home
        </Link>
      </li>
      <li className="home-links-item">Products</li>
      <li className="home-links-item">Cart</li>
      <button type="button" className="logout-button">
        Logout
      </button>
    </ul>
  </div>
)

export default Header
