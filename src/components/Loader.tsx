export default function Loader() {
  return (
    <>
      <div className="w-full h-full flex relative py-20">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
          <div className="custom-loader" />
        </div>
      </div>
    </>
  );
}
