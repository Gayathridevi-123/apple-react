import React from "react";

function Hero() {
  const iphoneImg = "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2023/02/iphone-15-pro-in-dark-red-different-angle.jpg";

  return (
    <section className="flex flex-col md:flex-row items-center p-10 bg-rose-900 text-white">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">iPhone 15 Pro</h1>
        <p className="text-xl mb-6">Titanium. All New. All Powerful.</p>
        <button className="bg-rose-700 text-white px-6 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-rose-800 hover:shadow-2xl">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src={iphoneImg}
          alt="iPhone 15"
          className="w-full max-w-lg mx-auto shadow-2xl rounded-xl transform transition duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Hero;
