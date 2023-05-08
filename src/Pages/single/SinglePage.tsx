import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  let { id } = useParams();
  let [data, setData] = useState([]);

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  // useEffect(() => {
  //   (async function () {
  //     const data = await axios.get(api).then((res) => res.json());
  //     updateFetchedData(data);
  //   })();
  // }, [api]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, [api]);

  return <div>SinglePage</div>;
};

export default SinglePage;
