import React from "react";

function Features() {
  const features = [
    { title: "Pro Camera", desc: "Capture every detail like never before.", img: "https://cdn.iphoneincanada.ca/wp-content/uploads/2023/07/iPhone-16-Pro-Ma.jpg" },
    { title: "A17 Chip", desc: "Lightning fast performance.", img: "https://tse3.mm.bing.net/th/id/OIP.0JKt6P8rYQs6YalQWOE53wHaEc?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "iOS 18", desc: "Seamless experience.", img: "https://pics.craiyon.com/2023-06-04/3fb35b24d9a14c098423f231c8896f8f.webp" },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-6 p-10 bg-gray-900 text-white">
      {features.map((f, idx) => (
        <div key={idx} className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-72 transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50">
          <img
            src={f.img}
            alt={f.title}
            className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-amber-500 transform transition duration-300 hover:scale-105"
          />
          <h3 className="text-2xl font-bold mb-2 text-amber-300">{f.title}</h3>
          <p className="text-amber-200">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
