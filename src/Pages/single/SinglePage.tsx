import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";

const SinglePage = () => {
  let { id } = useParams();
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(api);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, [api]);

  return loading ? (
    <LoadingComponent />
  ) : (
    <div className="wrapper">
      <Card className="singleCart">
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={data.image}
            alt={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Alert variant="filled" severity="success">
              {data.status}
            </Alert>
            <div className="desc">
              <span>
                Gender : <strong>{data.gender}</strong>
              </span>
              <span>
                Location : <strong>{data.location?.name}</strong>
              </span>
              <span>
                Origin : <strong>{data.origin?.name}</strong>
              </span>
              <span>
                Species : <strong>{data.species}</strong>
              </span>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">
            <Button size="small" color="primary">
              BACK
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default SinglePage;
