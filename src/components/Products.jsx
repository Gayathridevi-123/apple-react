import React from "react";

function Products() {
  const products = [
    { name: "MacBook", img: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/1vpavic_20250305__0803.jpg?quality=90&strip=all&crop=0,0,100,100" },
    { name: "iPad", img: "https://cdn.sforum.vn/sforum/wp-content/uploads/2021/05/tren-tay-iPad-Pro-2021-9.jpg" },
    { name: "iPhone", img: "https://soyacincau.com/wp-content/uploads/2021/12/211209-macro-cinematic-mode-iphone-13-pro-max-scaled.jpg" },
    { name: "Apple Watch", img: "https://www.stuff.tv/wp-content/uploads/sites/2/2023/09/Watch-Series-9.jpg?resize=825" },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-6 p-10 bg-gradient-to-br from-rose-950 to-rose-800 text-white">
      {products.map((p, idx) => (
        <div key={idx} className="bg-rose-900 border border-yellow-400 p-6 rounded-2xl shadow-lg w-64 transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50">
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-48 object-contain mb-4 rounded-lg transform transition duration-300 hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-yellow-300">{p.name}</h3>
          <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded-full shadow transform transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-2xl">
            Buy Now
          </button>
        </div>
      ))}
    </section>
  );
}

export default Products;
