const TodaysDeal = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl font-bold mt-10 mb-5">Today's deals</h2>
      </div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div
            className="hero h-[200px] lg:h-[400px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/WGbgv6y/pexels-valeria-boltneva-965989.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Free 4 piece Viktor&Rolf gift
                </h1>
                <p className="mb-5">with any $75 online purchase $120 value</p>
                <a className="underline">Get the gift</a>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div
            className="hero h-[200px] lg:h-[400px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/d0rSm2m/pexels-paula-francis-4408447.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Buy one get one select hair minis
                </h1>
                <p className="mb-5">gorgeous hair event</p>
                <a className="underline">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </div>
  );
};

export default TodaysDeal;
