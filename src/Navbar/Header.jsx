const Header = () => {
  return (
    <div>
      <div
        className="flex flex-col min-h-screen bg-slate-800 text-white bg-fixed bg-center bg-cover bg-blend-overlay bg-black/30"
        style={{ backgroundImage: "url(https://i.ibb.co/61Zg4qJ/banner.jpg)" }}
      >
        {/* Hero Section */}
        <div className="flex-1 flex items-center">
          <div className="text-center mx-auto">
            <h1 className="text-6xl font-semibold">
              Welcome to <br /> World of Beauty
            </h1>
            <p className="font-light text-3xl mt-5"></p>
            <a className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-300 transparent">
              Beauty Range
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
