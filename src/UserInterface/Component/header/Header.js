import React, { useEffect, useState } from "react";
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
export default function Header(){
const [open,setOpen]=useState(false)
const handleOpen=()=>{
  setOpen(true)
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

/*var icons=[{id:1,Image:"bookmyshow_logo.jpg"}]

const cityIcons=()=>{
  return icons.map((item)=>{
    return(
      <div>
        <img src={item.Image}/>
      </div>
    )
  })
}*/
const cityDialog=()=>{
return(
  <Dialog
  open={open}
  maxWidth={"md"}
 className="dialog"
  TransitionComponent={Transition}
  >
<DialogContent>
  <div className="dialogcontent_maindiv">
  <TextField fullWidth/>
  <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
  <span style={{display:'flex',justifyContent:'center',marginTop:'2%',marginBottom:'2%'}}>Popular Cities</span>
  <div style={{display:'flex',flexDirection:'row'}}>
 <img src="assets/delhi.png" width="8%" style={{marginRight:'4%'}}/>
 <img src="assets/goa.png" width="8%" style={{marginRight:'4%'}}/>
 <img src="assets/mumbai.png" width="8%" style={{marginRight:'3%'}}/>
 <img src="assets/pune.png" width="8%" style={{marginRight:'3%'}}/>
 <img src="assets/kerala.png" width="8%" style={{marginRight:'3%'}}/>
 <img src="assets/hyderabad.png" width="8%" style={{marginRight:'3%'}}/>
 <img src="assets/goa.png" width="8%" style={{marginRight:'3%'}}/>
 <img src="assets/rajastan.png" width="8%" style={{marginRight:'3%'}}/>
 <img src="assets/kashmir.png" width="8%" style={{marginRight:'3%'}}/>
</div>
  </div>
  </div>
</DialogContent>
  </Dialog>
)
  }
    return(<div className="header">
    <div className="fnavbar">
   <img src="assets/bookmyshow_logo.jpg" width="9%" className="logo"/>
   <TextField className="search_bar" placeholder="Search for Movies,Event,Sports and Activites"  size="small"/>
   <span className="Location" onClick={handleOpen}  >Gwalior<ArrowDropDownIcon/></span>
   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sx={{ width: 25, height: 25 }}/>
   <span className="username">Hi, Guest</span>
</div>
<div className="snavbar">
  <div className="leftsnavbar">
       <span className="snavbar_links">Movies</span>
       <span className="snavbar_links">Stream</span>
       <span className="snavbar_links">Event</span>
       <span className="snavbar_links">Play</span>
       <span className="snavbar_links">Sports</span>
       <span className="snavbar_links">Activites</span>
       <span className="snavbar_links">Buzz</span>
</div>
<div className="rightsnavbar">
       <span className="snavbar_links">ListYourShow</span>
       <span className="snavbar_links">Corporates</span>
       <span className="snavbar_links">Offers</span>
       <span className="snavbar_links">GiftCard</span>
</div>
</div>
{cityDialog()}
</div>
     )
}