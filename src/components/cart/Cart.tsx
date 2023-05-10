import Badge from "../badge";
import { Results } from "../../types/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = (props: { results: Results[] }) => {
  return (
    <div className="container">
      {props.results.map((res) => (
        <Card className="cart" key={res.id}>
          <CardActionArea>
            <Link to={`/single/${res.id}`}>
              <CardMedia
                component="img"
                height="250"
                image={res.image}
                alt={res.name}
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {res.name}
              </Typography>
              <Badge status={res.status} />
              <div className="desc">
                <span>Last Location</span>
                <span>{res.location.name}</span>
              </div>
            </CardContent>
          </CardActionArea>

          <CardActions className="cartAction">
            <Link to={`/single/${res.id}`}>
              <Button size="small" color="primary">
                Show more
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
