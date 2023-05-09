import { useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import Search from "../../components/search/Search";
import { Pagination } from "@mui/material";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import LoadingComponent from "../../components/loading/LoadingComponent";
import Filter from "../../components/filter/Filter";

const HomePage = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, updateSearch] = useState("");
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

  const handleChangePagination = (event, value) => {
    updatePageNumber(value);
  };

  const handleChangeStatus = (event) => {
    updateStatus(event.target.value);
  };
  const handleChangeGender = (event) => {
    updateGender(event.target.value);
  };
  const handleChangeSpecies = (event) => {
    updateSpecies(event.target.value);
  };

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["homepage"],
    queryFn: () =>
      newRequest
        .get(
          `/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
        )
        .then((res) => res.data),
  });

  console.log(data);

  useEffect(() => {
    refetch();
    console.log(pageNumber);
  }, [pageNumber, search, status, gender, species]);

  return (
    <div>
      <h1 className="text-center mb-3">Characters</h1>
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
