import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { MainContainer, Button, CartH1, CartH3, CartH6, CartTitle, Cartheader, CartInput} from "../StyledComponents/BasketStyle";
import { VehicleImage } from '../StyledComponents/VehicleStyle';
import { useHistory } from "react-router";
function Cart(props) {
    const { cartItems } = props;
    const history = useHistory();

    const signout = async (e) => {
      e.preventDefault();    
        history.push("/Checkout");
      }
  

    return (
      <div>
        <CartTitle className="shadow p-3 mb-5 bg-light"><Cartheader>CART</Cartheader></CartTitle>
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

           
          <CartInput  onClick={(e) => signout(e)}type="submit" value="Rent Me">
            </CartInput>
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