import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Info, Results } from "./types/Info";
import Cart from "./components/cart/Cart";
import Search from "./components/search/Search";
import PaginationComponent from "./components/pagination/Pagination";
import { Pagination } from "@mui/material";

function App() {
  const [info, setInfo] = useState<Info | Promise<Info>>();
  const [results, setResults] = useState<Results[] | Promise<Results[]>>([]);

  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    updatePageNumber(value);
  };

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(api);
        setInfo(data.info);
        setResults(data.results);
        console.log(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="">
          <div className="col-lg-8 col-12">
            <Cart results={results} />
          </div>
        </div>
        {/* <PaginationComponent /> */}

        <Pagination
          count={5}
          color="secondary"
          page={pageNumber}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
