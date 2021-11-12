import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import "../App.css";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.model}>
        <div className="container">
          <a
            href={`#${product.make}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <img
              className="productImages"
              src={product.image}
              alt={product.make}
            />
            <p>{product.make}</p>
            <p>{product.model}</p>
          </a>
          {/* <b>{util.formatCurrency(product.price)}</b> */}
          <form action="/cart"
            className="" 
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>
            <input type="submit" value="Rent Me">
            </input>
          </form>
        </div>
      </div>
    ));

    return (
      <div className="container">
            <div className="row">
              <h1>Rent Here</h1>
                {productItems}
            </div>
        </div>)
    }
  }
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
