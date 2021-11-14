import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import "../App.css";
import { VehicleImage, VehicleContainer, 
  VehicleInput, VehicleH1, VehicleH4 } from '../StyledComponents/VehicleStyle'

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <VehicleContainer className="col-md-4" key={product.model}>
        <div className="shadow p-3 mb-5 bg-white rounded">
          <a
            href={`#${product.make}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <VehicleImage
              className="productImages"
              src={product.image}
              alt={product.make}
            />
            <VehicleH4>{product.make}</VehicleH4>
            <VehicleH1>{product.model}</VehicleH1>
          </a>
          {/* <b>{util.formatCurrency(product.price)}</b> */}
          <form action="/cart"
            className="" 
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>
            <VehicleInput type="submit" value="Rent Me">
            </VehicleInput>
          </form>
        </div>
      </VehicleContainer>
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
