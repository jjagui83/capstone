import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { MainContainer, Button, CartH1, CartH3, CartH6, CartTitle } from "../StyledComponents/BasketStyle";
import { VehicleImage } from '../StyledComponents/VehicleStyle'
function Cart(props) {
    const { cartItems } = props;

    return (
      <div>
        <CartTitle className="shadow p-3 mb-5 bg-light"><h4>Cart</h4></CartTitle>
      <MainContainer className="shadow p-3 mb-5 bg-light">
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
                  <b><VehicleImage  src={item.image} alt=""></VehicleImage ></b>
                  <CartH6>{item.make} </CartH6>
                  <CartH3>{item.model}</CartH3>
                  <Button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      props.removeFromCart(props.cartItems, item)
                    }
                  >
                    Remove
                  </Button>
                   <CartH1>${(item.price)}</CartH1>
                </li>
              ))}
            </ul>

            <form action="/checkout"
            className="btn btn-primary" 
            >
            <input type="submit" value="Rent Me">
            </input>
          </form>
          </div>
        )}
      </MainContainer>
      </div>
    );
  }

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);