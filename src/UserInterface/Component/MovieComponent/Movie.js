import React,{ createRef, useEffect, useState }  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Movie.css'
import { Paper } from "@mui/material";
export default function Movie(){
    var sliderRef = createRef();
/*const [popularMovie,setPopularMovie]=useState([])
    useEffect(()=>{
     fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res=>res.json())
    .then(data=>setPopularMovie(data.results))
    
    },[])
    
       {popularMovie.map(item=>
     <li>{item.original_title}</li>
        )}
   */

   
   var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed:2000,
        };
    var poster=[
        {id:1,LinkImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni4zLzEwICAyMzIuN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00137215-smxelgjeue-portrait.jpg'},
        {id:2,LinkImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICA1Ni4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359644-nqullkspgw-portrait.jpg'},
        {id:3,LinkImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTQuOUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00356210-syblrugbhn-portrait.jpg'},
        {id:4,LinkImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAyMi4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00047401-flfqsnkwwg-portrait.jpg'},
        {id:5,LinkImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzAuOUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353537-enfurgamdj-portrait.jpg'},
        {id:6,LinkImg:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICA0Mi4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347275-eqjjcbfvmr-portrait.jpg'},
    ]

    const showPoster=()=>{
        return poster.map((item)=>{
            return(
                <div className="posterdiv">
                <img src={item.LinkImg} width="60%"/>
                </div>
            )
        })
    }
    const handleBack = () => {
        sliderRef.current.slickPrev();
      };
    
      const handleForwad= () => {
        sliderRef.current.slickNext();
      };
    return(<div className="maincontainerposter">
        <div className="heading">
        Recommended Movies
        </div>
        <div className="posterleftarrowcircle">
      <ArrowBackIosNewIcon  onClick={handleBack} />
  </div>
      <Slider {...settings} ref={sliderRef} >
    {showPoster()}
 </Slider>
 <div className="posterrightarrowcircle">
 <ArrowForwardIosIcon  onClick={handleForwad}/>
</div>
    </div>)
}