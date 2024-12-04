import React from "react";
import  { useState } from "react";

import wireguardLogo from "./images/wireguardlogo.png"; // Adjust the path if needed
import emailicon from "./images/gmail.png";



const LandingPage = () => {

  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const phoneNumber = "+26656107295";
    const message = "Hello! I would like to inquire about your services."; // Customize your message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    const services = [
      { title: "Web Development", description: "Building responsive and engaging websites." },
      { title: "Graphic Design", description: "Creating visually appealing designs." },
      { title: "Digital Marketing", description: "Promoting your business online effectively." },
      { title: "Content Creation", description: "Writing blogs, articles, and more for your brand." },
    ];
  return (
    <div>
    <header className="bg-brown-600 text-white py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">AdStripper</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleDropdown}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-brown-500">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>

      <main>
        <section id="hero" className="w-full py-12 md:py-24 bg-brown-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Privacy So Good, Even Your FBI Agent Will Get Jealous
            </h1>
            <p className="text-lg sm:text-xl mb-8">
            Surf the web like a ninja, block ads like a boss, and keep your data safer than your grandma's secret cookie recipe.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#pricing"
                className="bg-white text-brown-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="bg-transparent text-white px-6 py-3 rounded-full border-2 border-white font-bold hover:bg-white hover:text-brown-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="mb-4">
                  <i className="fas fa-shield-alt text-4xl text-brown-600"></i>
                </div>
                <h3 className="text-xl font-semibold">Top-Notch Security</h3>
                <p className="text-gray-500">Your online activities are safer than a squirrel's nuts in winter.</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <i className="fas fa-globe-americas text-4xl text-brown-600"></i>
                </div>
                <h3 className="text-xl font-semibold">Global Server Network</h3>
                <p className="text-gray-500">More locations than your ex's vacation Instagram posts.</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <i className="fas fa-user-secret text-4xl text-brown-600"></i>
                </div>
                <h3 className="text-xl font-semibold">Anonymous Browsing</h3>
                <p className="text-gray-500">We remember less about you than your ex does.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="wireguard" className="w-full py-12 md:py-24 bg-brown-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6">
              Powered by <img src={wireguardLogo} alt="WireGuard Logo" className="inline h-10" />
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              AdStripper uses WireGuard technology for lightning-fast
              speeds and robust security. Enjoy a seamless browsing experience
              with minimal latency.
            </p>
            <a
              href="#features"
              className="bg-brown-600 text-white px-6 py-3 rounded-full font-bold hover:bg-brown-700 transition"
            >
              Learn More About WireGuard
            </a>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="border-2 border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <p className="text-xl text-gray-600 mb-4">$4 / month</p>
                <ul className="text-gray-500 mb-6">
                  <li>1 Device</li>
                  <li>Ad remover</li>
                  <li>5 Servers</li>
                </ul>
                <a
                  href="#"
                  className="bg-brown-600 text-white px-6 py-3 rounded-full font-bold hover:bg-brown-700 transition"
                >
                  Get Started
                </a>
              </div>
              <div className="border-2 border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-xl text-gray-600 mb-4">$10 / month</p>
                <ul className="text-gray-500 mb-6">
                  <li>Up to 5 Devices</li>
                  <li>Advanced Encryption + Ad remover</li>
                  <li>50+ Servers</li>
                </ul>
                <a
                  href="#"
                  className="bg-brown-600 text-white px-6 py-3 rounded-full font-bold hover:bg-brown-700 transition"
                >
                  Get Started
                </a>
              </div>
              <div className="border-2 border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ultra</h3>
                <p className="text-xl text-gray-600 mb-4">$15 / month</p>
                <ul className="text-gray-500 mb-6">
                  <li>Unlimited Devices</li>
                  <li>Premium Encryption</li>
                  <li>100+ Servers</li>
                </ul>
                <a
                  href="#"
                  className="bg-brown-600 text-white px-6 py-3 rounded-full font-bold hover:bg-brown-700 transition"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">What is a VPN?</h3>
                <p className="text-gray-600">
                  A VPN (Virtual Private Network) encrypts your internet
                  connection to keep your online activity private and secure.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">How does WireGuard work?</h3>
                <p className="text-gray-600">
                  WireGuard is a modern VPN protocol that offers fast speeds and
                  strong encryption with minimal overhead, ensuring a better user experience.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Can I use StealthShield VPN on my mobile device?</h3>
                <p className="text-gray-600">
                  Yes! Our app supports iOS and Android devices for seamless protection wherever you go.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 bg-brown-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              Have any questions? Our team is here to help. Reach out to us, and we'll get back to you shortly.
            </p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

            <a
              href="mailto:kamohelojlebona@gmail.com?subject=Inquiry&body=Hello, I would like to inquire about your services."
              className="bg-white text-brown-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition flex items-center justify-center"
              title="Send an Email"
            >
              <img
                src={emailicon} // A reliable email icon
                alt="Email Icon"
                className="w-6 h-6 mr-2" // Adjust size as needed
              />
              Send Email
            </a>
              <div 
                className="flex items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => window.open(whatsappUrl, '_blank')}
                title="Chat on WhatsApp"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp Logo" 
                  className="w-12 h-12" // Adjust size as needed
                />
              </div>
            </div>

          </div>

        </section>
      </main>

      <footer className="w-full py-8 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Lebona Executive Software. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;