import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import "../assets/styles/HeroSectionCarousel.css";
import { useState } from "react";

function HeroSectionCarousel() {
  const slideItems = [
    {
      SlideItem: 1,
      imgUrl: slide1 ,
      slideItemTitle: "10% OFF YOUR FIRST ORDER",
      slideItemPara: "Reasonable Price",
    },
    {
      SlideItem: 2,
      imgUrl:  slide2 ,
      slideItemTitle: "10% OFF YOUR FIRST ORDER",
      slideItemPara: "Reasonable Price",
    },
    {
      SlideItem: 3,
      imgUrl: slide3 ,
      slideItemTitle: "10% OFF YOUR FIRST ORDER",
      slideItemPara: "Reasonable Price",
    },
  ];
  const [slidePosition, setslidePosition]=useState(0)
  const slideWidth = 100
  const isFristSlide = slidePosition === 0
  const isLastSlide = slidePosition === -200
  function slideFunc(direction) {
    if (direction === "prev") {
      setslidePosition((pos) => (pos === 0 ? 0 : pos + slideWidth));
    } else {
      setslidePosition((pos) => ( pos === -200 ? -200 : pos - slideWidth));
    }
  }

  return (
    <>
      <div className="Carousel_container mt-5">
        <div className={`PrevBtn SlideBtn ${isFristSlide && "stopBtn"}`} onClick={()=>slideFunc("prev")}><ChevronLeftOutlinedIcon /></div>
        <div className={`NextBtn SlideBtn ${isLastSlide && "stopBtn"}`} onClick={()=>slideFunc("next")}><ChevronRightOutlinedIcon /></div>
        {slideItems.map((Sitem) => (
          <div className="SlideItem" key={Sitem.SlideItem} style={{transform: `translateX(${slidePosition}%)`}}>
            <img src={Sitem.imgUrl} alt="slide" loading="lazy"/>
            <div className="SlideDetails">
            <h2>{Sitem.slideItemTitle}</h2>
            <p>{Sitem.slideItemPara}</p>
            <button className="shopBtn_slide">Shop Now</button>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}
export default HeroSectionCarousel;
