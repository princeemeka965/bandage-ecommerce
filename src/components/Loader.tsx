interface LoaderProps {
  size: string;
}

const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <>
      <div className="w-full h-full flex relative py-5">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
          {props.size === "xs" ? (
            <div className="custom-loader-xs" />
          ) : (
            <div className="custom-loader" />
          )}
        </div>
      </div>
    </>
  );
};

export default Loader;
