import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-menu.svg"
import user from "../assets/images/image-avatar.png"
import cart from "../assets/images/icon-cart.svg"
import minus from "../assets/images/icon-minus.svg"
import plus from "../assets/images/icon-plus.svg"
import Categories from "./categories"
import Carrusel from "./carrusel"
import Photos from "./photos"

function App() {
  return (
    <div className="app">
      <header className="container-menu">
        <nav className="menu">
          <div className="menu-desplegable">
            <div className="menu-desplegable-list">
              <Categories class="menu-desplegable-categories" />
            </div>
          </div>
          <div className="menu-left">
            <picture className="menu-icon">
              <img src={menu} alt="menu" />
            </picture>
            <picture className="menu-logo">
              <img src={logo} alt="logo" />
            </picture>
            <Categories class="menu-categories"/>
          </div>
          <div className="menu-right">
            <div className="wp-cart">
              <img src={cart} alt="" />
            </div>
            <div className="wp-user">
              <img src={user} alt="avatar" />
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="container-imagesProduct">
          <Carrusel class="container-imagesProduct-carrousel" />
          <Photos />
        </div>
        <div className="container-information">
          <h5>Sneaker Company</h5>

          <h1>Fall Limited Edition Sneakers</h1>

          <p className="container-information-p">These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          
          <div className="container-priceInfo">
            <div id="price">             
              <h2 className="priceInfo-price">
               $125.00
              </h2>
              <div className="priceInfo-discount">
                <p className="priceInfo-discount-p">50%</p>
              </div>
            </div>
            <div className="priceInfo-priceTotal">
              <strike>$250.00</strike>
            </div>
          </div>
          <div className="container-quantity">
            <div className="quantity-buttons">
              <button className="button-minus"><img src={minus} alt="menos" /></button>
              <span>0</span>
              <button className="button-plus"><img src={plus} alt="más" /></button>
            </div>
            <button className="button-add">
              <img src={cart} alt="" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </main>
      <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://pamelapz.xyz">PamelaPz</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
