import "./Carousel.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Next from "../CustomIcons/Next";
import Prev from "../CustomIcons/Prev";
import { menuItems } from "../Navbar/navItems";
import { Link } from "react-router-dom";
import NavItems from "../Navbar/NavIcons";
import useWindowDimensions from "../hooks/useWindowDimension";

const SampleNextArrow = (props: React.HTMLAttributes<Element>) =>{
  const { className, style, onClick } = props;
  return (
    <div className={`arrow_btn next`} style={{}} onClick={onClick}>
      <Next />
    </div>
  );
}

const SamplePrevArrow = (props: React.HTMLAttributes<Element>) =>{
  const { className, style, onClick } = props;
  return (
    <div className={`arrow_btn prev`} style={{}} onClick={onClick}>    
      <Prev />
    </div>
  );
}

const NavbarCarousel = () => {
  var router = useLocation();
  const [slideNumber, setSlideNumber] = useState(12);
  const { width, height } = useWindowDimensions();

  useEffect(()=>{
    if(width === undefined) return
    if (width < 730 && width >= 500) {
      setSlideNumber(8);
    } else if (width < 500) {
      setSlideNumber(5);
    } else {
      setSlideNumber(12);
    }
  }, [width])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideNumber,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {menuItems.map((item, index) => {
          return (
            <Link key={item.routepath} to={item.routepath}>
              <div>
                <span
                  className={`menu ${
                    router.pathname === item.routepath ? "active_route" : ""
                  }`}
                >
                  <NavItems tab={item.name} />
                  <span className="nav_item_name">{item.name}</span>
                </span>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default NavbarCarousel;
