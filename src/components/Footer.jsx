import React from "react";

function Footer() {
  const footerLinks = [
    { title: "Shop and Learn", links: ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"] },
    { title: "Services", links: ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud", "Apple One", "Apple Pay", "Apple Books", "App Store"] },
    { title: "Apple Store", links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Refurbished and Clearance", "Financing", "Carrier Deals", "Order Status", "Shopping Help"] },
    { title: "For Business", links: ["Apple and Business", "Shop for Business"] },
    { title: "For Education", links: ["Apple and Education", "Shop for K-12", "Shop for College"] },
    { title: "About Apple", links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"] },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold mb-3">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li key={i} className="hover:underline cursor-pointer transition">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        <p>© 2025 AppleClone Inc. All rights reserved.</p>
        <p>Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map</p>
      </div>
    </footer>
  );
}

export default Footer;
