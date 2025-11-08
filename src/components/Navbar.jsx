import React from "react";


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const links = ["Mac", "iPad", "iPhone", "Watch", "AirPods", "Support"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h2 className="text-xl font-bold">AppleClone</h2>

        <ul className="hidden md:flex gap-6">
          {links.map((link, idx) => (
            <li key={idx} className="hover:text-gray-400 cursor-pointer transition">{link}</li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-between w-6 h-6 focus:outline-none space-y-1.5"
          >
            <span className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-full bg-white rounded transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 bg-black px-4 pb-4 md:hidden transition">
          {links.map((link, idx) => (
            <li key={idx} className="hover:text-gray-400 cursor-pointer transition">{link}</li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
