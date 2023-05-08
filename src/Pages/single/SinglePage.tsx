import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions, Alert } from '@mui/material'
import { Link } from 'react-router-dom'
import { Skeleton } from '@mui/material'

const SinglePage = () => {
  let { id } = useParams()
  let [data, setData] = useState([])

  let api = `https://rickandmortyapi.com/api/character/${id}`

  const loading = false

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api)
      console.log(response.data)
      setData(response.data)
    }
    fetchData()
  }, [api])

  return loading ? (
    <Skeleton animation="wave" variant="circular" width={40} height={40} />
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
                Gender : <strong>{data.gender}</strong>{' '}
              </span>
              <span>
                Location : <strong>{data.location?.name}</strong>{' '}
              </span>
              <span>
                Origin : <strong>{data.origin?.name}</strong>{' '}
              </span>
              <span>
                Species : <strong>{data.species}</strong>{' '}
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
  )
}

export default SinglePage
