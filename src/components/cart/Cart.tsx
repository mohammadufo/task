import Badge from "../badge";
import { Results } from "../../types/Info";
import "./cart.scss";

const Cart = (props: Results[]) => {
  return (
    <div className="container">
      {props.results.map((res) => (
        <div key={res.id} className="card">
          <img className="img" src={res.image} alt="" />
          <div className="content">
            <h2>{res.name}</h2>
            <div className="desc">
              <span>Last Location</span>
              <span>{res.location.name}</span>
              <Badge status={res.status} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
