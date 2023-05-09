import loader from "../assets/loader.gif";

const LoadingComponent = () => {
  return (
    <div className="loadingContainer">
      <img src={loader} />
    </div>
  );
};

export default LoadingComponent;
