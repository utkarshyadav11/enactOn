
import { useState, useEffect } from "react";
import signature3 from "../assets/svg/signature3.svg";
import cart from "../assets/svg/cart.svg";
import wishlist from "../assets/svg/wishlist.svg";
import BurgurIcon from "../assets/svg/coolicon.svg";
import CloseIcon from "../assets/svg/close_round.svg";
import signature5 from "../assets/svg/signature5.svg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
// condition for hiding the border on mobile
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isSidebarOpen && (
        <div className="fixed z-40 hidden left-6 bottom-32 lg:block">
          <img src={signature5} alt="signature_image" />
        </div>
      )}

      <div
        id="sidebar"
        className={`fixed top-0 left-0 z-30 h-full text-white transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0 border-0" : `-translate-x-1/2 ${isMobile ? "border-r-0" : "border-r-8"}`
        } lg:w-[22%] bg-HalfTransparent w-30`}
        style={{
          borderRight: isSidebarOpen ? 'none' : isMobile ? 'none' : '8px solid #d29a5a',
        }}
      >
        <div
          id="sidebarContent"
          className={`h-screen ${isSidebarOpen ? "" : "hidden"}`}
        >
          <div className="flex flex-col h-screen sm:flex">
            <div className="flex-none px-4 py-2">
              <div>
                <img src={signature3} alt="signature_image" />
              </div>
            </div>
            <div className="flex flex-col flex-grow gap-5 px-4 py-2 h-96">
              <a className="cursor-pointer hover:text-Gold" href="#home">
                HOME
              </a>
              <a className="cursor-pointer hover:text-Gold" href="#products">
                PRODUCTS
              </a>
              <a className="cursor-pointer hover:text-Gold" href="#meetchef">
                MEET CHEF MATT
              </a>
              <a className="cursor-pointer hover:text-Gold" href="#faq">
                FAQ
              </a>
              <a className="cursor-pointer hover:text-Gold" href="#footer">
                CONNECT WITH US
              </a>
            </div>
            <div className="flex-none">
              <div className="flex justify-between px-4 py-4">
                <div className="cursor-pointer">TEXT SUPPORT 24/7</div>
                <a className="underline text-Gold" href="tel:07077829137">
                  070-7782-9137
                </a>
              </div>

              <div className="flex justify-between px-4 py-4 border-t-2 border-white">
                <div className="flex flex-row gap-2 cursor-pointer">
                  <img src={cart} alt="Cart" />
                  <span className="flex items-center">CART</span>
                </div>
                <div className="flex flex-row gap-2 cursor-pointer">
                  <img src={wishlist} alt="Wishlist" />
                  <span className="flex items-center">WISHLIST</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-gray-200">
        <button
          id="toggleSidebar"
          onClick={toggleSidebar}
          className="fixed p-2 text-white rounded z-[100] top-4 left-4 md:left-8 focus:outline-none"
        >
          <img
            id="hamburgerIcon"
            src={BurgurIcon}
            alt="Hamburger"
            className={`${isSidebarOpen ? "hidden" : ""}`}
          />
          <img
            id="closeIcon"
            src={CloseIcon}
            alt="Close"
            className={`${isSidebarOpen ? "" : "hidden"}`}
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
