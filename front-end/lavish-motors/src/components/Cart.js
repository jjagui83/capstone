import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { MainContainer, Button } from "../StyledComponents/BasketStyle";
class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <MainContainer className="alert alert-info">
        {cartItems.length === 0 ? (
          "You currently don't have any vehicle selected to rent."
        ) : (
          <div>
            You have {cartItems.length} vehicles ready to begin the rental process. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b><img src={item.image} alt=""></img></b>
                  <b>{item.make} </b>
                  <b>{item.model}</b>
                  <Button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </Button>
                  <br />
                   ${(item.price)}
                </li>
              ))}
            </ul>

            <button
              onClick={() => alert("Todo: Implement checkout page.")}
              className="btn btn-primary"
            >
              Begin Rental Process
            </button>
          </div>
        )}
      </MainContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);