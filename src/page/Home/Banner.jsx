const Banner = () => {
  return (
    <div className=" w-full sm:after:min-h-screen md:h-[550px]  bg-[#f4e5ec]">
      <div className="grid md:flex justify-between items-center grid-cols-1 md:grid-cols-2">
        <div className="md:w-1/2 sm:after:w-full p-10 space-y-7">
          <h1 className=" uppercase text-red-500">up to 20% discount on</h1>
          <h1 className="text-4xl md:text-7xl  font-semibold">
            Girl's Fashion{" "}
          </h1>
          <p className="text-gray-600">
            A charming smock dress with oversized balloon sleeves that add a
            touch of drama to the look. Made from soft cotton with a gingham
            print, the dress is both comfortable and cute. Its loose fit and
            gathered waist make it easy to wear, perfect for playdates or casual
            outings
          </p>
          <button className="btn uppercase bg-primary ">explore now</button>
        </div>
        <div className="">
          <img
            className="h-[400px] md:h-[550px] items-center"
            src="/header.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
