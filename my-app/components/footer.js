const Footer = () => {
    return (
      <footer className="bg-[#1A1230] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Moonpreneur Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Moonpreneur</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Why Moonpreneur</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>MoonStore</li>
            </ul>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>ELDP</li>
              <li>MoonBattle</li>
              <li>Moonfunded</li>
              <li>Student Project</li>
              <li>Innovator Program</li>
              <li>Power Skills</li>
              <li>Affiliate Login</li>
            </ul>
          </div>
  
          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Blogs</li>
              <li>Our Teachings</li>
              <li>Career Quiz for Kids</li>
              <li>Math Quiz for Kids</li>
              <li>FAQs</li>
              <li>Careers</li>
              <li>Events</li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subscribe to our Newsletter</h3>
            <p className="text-sm mb-3">
              Subscribe now to our newsletter and receive the latest updates and information on our ongoing and upcoming programs.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email ID"
                className="w-full p-2 rounded-md text-black"
              />
              <button className="bg-gray-600 px-4 py-2 rounded-md text-white hover:bg-gray-700">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
  
        {/* Contact Info & Social Media */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm mb-3">
            <span className="font-semibold">Contact us:</span> US: (+18555500571) | Australia: (+611800714181) | UK: (+448085020230) | Canada: (+18778488835)
          </p>
          <div className="flex justify-center space-x-4">
            <i className="fab fa-facebook text-xl cursor-pointer"></i>
            <i className="fab fa-linkedin text-xl cursor-pointer"></i>
            <i className="fab fa-youtube text-xl cursor-pointer"></i>
            <i className="fab fa-x-twitter text-xl cursor-pointer"></i>
            <i className="fab fa-instagram text-xl cursor-pointer"></i>
          </div>
          <p className="text-sm mt-3">&copy; 2025 Copyright, Moonpreneur Inc.</p>
          <p className="text-xs">3031 Tisch Way, 110 Plaza West PMB # 138, San Jose, CA 95128, USA</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  