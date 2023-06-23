import React,{ createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Banner.css"
export default function Banner(){
  var sliderRef = createRef();
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
      };
      var images=[
        {id:1,LinkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg"},
        {id:2,LinkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1685964734910_summeractiviesdesktop.avif"},
        {id:3,LinkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1680083241797_rewardsweb.jpg"},
      {id:4,LinkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1687102676944_sunburnweb.jpg"},
      {id:5,LinkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1687179598020_freeaccessdesktop.jpg"},
    {id:6,LinkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1687179598020_freeaccessdesktop.jpg"}
    ]
    const handleBack = () => {
      sliderRef.current.slickPrev();
    };
  
    const handleForwad= () => {
      sliderRef.current.slickNext();
    };
      const showImages=()=>{
        return images.map((item)=>{
            return(<div>
                <img src={item.LinkImg} width="100%"/>
            </div>)
        })
      }
    return(<div className="maincontainer">
    <div className="leftarrowcircle">
      <ArrowBackIosNewIcon  onClick={handleBack} />
  </div>
 <Slider {...settings} ref={sliderRef}>
    {showImages()}
 </Slider>
<div className="rightarrowcircle">
 <ArrowForwardIosIcon  onClick={handleForwad}/>
</div>
    </div>)
}