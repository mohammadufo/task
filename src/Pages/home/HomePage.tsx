import { useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import Search from "../../components/search/Search";
import { IconButton, Pagination } from "@mui/material";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import LoadingComponent from "../../components/loading/LoadingComponent";
import Filter from "../../components/filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { lightMode, darkMode } from "../../redux/themeSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const HomePage = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, updateSearch] = useState("");
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");

  const mode = useSelector((state: any) => state.theme.mode);
  const dispatch = useDispatch();

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

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    updatePageNumber(value);
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateStatus(event.target.value);
  };
  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateGender(event.target.value);
  };
  const handleChangeSpecies = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSpecies(event.target.value);
  };

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["homepage"],
    queryFn: () =>
      newRequest
        .get(
          `/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
        )
        .then((res: any) => res.data),
  });

  useEffect(() => {
    refetch();
  }, [pageNumber, search, status, gender, species]);

  const handleTheme = () => {
    if (mode === "dark") {
      dispatch(lightMode());
      return;
    }
    dispatch(darkMode());
  };

  return (
    <div>
      <div>
        <h1 className="text-center mb-3">Characters</h1>
        <span>{mode === "dark" ? "light mode" : "dark mode"} </span>
        <IconButton onClick={handleTheme} color="inherit">
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
      <Search setSearch={updateSearch} updatePageNumber={updatePageNumber} />
      <Filter
        handleChangeStatus={handleChangeStatus}
        status={status}
        gender={gender}
        handleChangeGender={handleChangeGender}
        species={species}
        handleChangeSpecies={handleChangeSpecies}
        speciesArr={speciesArr}
      />

      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="container">
          <div className="">
            <div className="col-lg-8 col-12">
              <Cart results={data?.results} />
            </div>
          </div>
          <br />
          <Pagination
            count={data?.info.pages}
            size="large"
            page={pageNumber}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePagination}
            color="primary"
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
