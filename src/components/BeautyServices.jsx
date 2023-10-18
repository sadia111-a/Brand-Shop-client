const BeautyServices = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-blend-overlay bg-black/30 bg-slate-600">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img
              src="https://i.ibb.co/WGmrwYj/pexels-david-geib-3268732.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <img
              src="https://i.ibb.co/105JRD4/pexels-tembela-bohle-1884582.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>

          <div className="text-white">
            <h1 className="text-5xl font-bold">Beauty Services</h1>
            <p className="py-6">
              Your best look. Our promise. Each service begins with a
              complimentary consultation with a licensed beauty pro. Ask
              questions and share ideas—we'll do the same.
            </p>
            <div className="flex gap-5">
              <a className="underline">Learn more</a>
              <a className="underline">Book appointment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyServices;
