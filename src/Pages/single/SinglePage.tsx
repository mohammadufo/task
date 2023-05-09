import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useEffect } from "react";

const SinglePage = () => {
  let { id } = useParams();

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleCart"],
    queryFn: () => newRequest.get(`${id}`).then((res) => res.data),
  });

  useEffect(() => {
    refetch();
  }, [id]);

  return isLoading ? (
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
