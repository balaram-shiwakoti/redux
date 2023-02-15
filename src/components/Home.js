import React from "react";

const Home = () => {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart" />
        </div>
      <h1>HomeComponent</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://mobilepricetoday.com/wp-content/uploads/2022/05/Samsung-Galaxy-F23-5G-Price-In-Bangladesh.png"
            alt="something"
          />
        </div>
        <div className="text-wrapper item">
          <span> Samsung</span>
          <span> Price:100$</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
