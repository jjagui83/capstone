import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { MainContainer, Button } from "../StyledComponents/BasketStyle";
import { VehicleImage } from '../StyledComponents/VehicleStyle'
function Basket(props) {
    const { cartItems } = props;

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
                  <b><VehicleImage  src={item.image} alt=""></VehicleImage ></b>
                  <h6>{item.make} </h6>
                  <h3>{item.model}</h3>
                  <Button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      props.removeFromCart(props.cartItems, item)
                    }
                  >
                    Remove
                  </Button>
                   <h1>${(item.price)}</h1>
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
    );
  }

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);