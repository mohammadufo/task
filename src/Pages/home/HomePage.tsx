import { useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import Search from "../../components/search/Search";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import LoadingComponent from "../../components/LoadingComponent";

const HomePage = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");

  const speciesArr: string[] = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const handleChange = (event, value) => {
    updatePageNumber(value);
  };

  const handleChangeStatus = (event, value) => {
    updateStatus(event.target.value);
  };
  const handleChangeGender = (event, value) => {
    updateGender(event.target.value);
  };
  const handleChangeSpecies = (event, value) => {
    updateSpecies(event.target.value);
  };

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["homepage"],
    queryFn: () =>
      newRequest
        .get(
          `?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
        )
        .then((res) => res.data),
  });

  useEffect(() => {
    refetch();
  }, [pageNumber, search, status, gender, species]);

  return (
    <div>
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="filterContainer">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Age"
            onChange={handleChangeStatus}
          >
            <MenuItem value={"Alive"}>Alive</MenuItem>
            <MenuItem value={"Dead"}>Dead</MenuItem>
            <MenuItem value={"Unknown"}>Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Age"
            onChange={handleChangeGender}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Unknown"}>Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Species</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={species}
            label="Age"
            onChange={handleChangeSpecies}
          >
            {speciesArr.map((species) => (
              <MenuItem key={species} value={species}>
                {species}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="container">
          <div className="">
            <div className="col-lg-8 col-12">
              <Cart results={data?.results} />
            </div>
          </div>
          <Pagination
            count={5}
            color="secondary"
            page={pageNumber}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
