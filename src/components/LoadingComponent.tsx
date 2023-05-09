import loader from "../assets/loader.gif";

const LoadingComponent = () => {
  return (
    <div className="loadingContainer">
      <img src={loader} />
      <span>salam</span>
    </div>
  );
};

export default LoadingComponent;
