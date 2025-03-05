import { Navbar, NavbarBrand } from "reactstrap";
import Cart from "../../assets/cart.svg";
import { memo } from "react";

function Header({ length = 0, cartToggle = () => {} }) {
  return (
    <Navbar className="" color="dark" dark>
      
      <h1 className="text-center text-white">SHOPPIFY</h1>
      <div className="cart" onClick={cartToggle}>
        <span className="count-bubble text-center">{length}</span>
        <img
          alt="cart"
          src={Cart}
          style={{
            height: 35,
            width: 35,
          }}
        />
      </div>
    </Navbar>
  );
}

export default memo(Header);

Header.propTypes = {
  length: Number,
  cartToggle: Function,
};
