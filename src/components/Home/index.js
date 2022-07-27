import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-main-container">
      <div className="home-first-container">
        <h1 className="home-top-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="home-image"
          alt="clothes that get you noticed"
        />
        <p className="home-fashion-text">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <div className="home-medium-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="home-medium-image"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
