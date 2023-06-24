import { Button, Paper } from "@mui/material"
import "./SelectedMovie.css"
export default function (){
    return(<div className="SMcontainer" >

        <img src="assets/adipurush.jpeg" width="20%" className="img"/>
     <div style={{width:'30%',display:'flex',flexDirection:'column',marginLeft:'2%',marginTop:'2%',marginBottom:'2%'}}>
     
     <span style={{fontSize:'40px',marginLeft:'3%',fontWeight:'bold',marginBottom:'2%',marginTop:'4%',letterSpacing:1,color:'white'}}>Adipurush</span>
     <span style={{fontSize:'28px',marginLeft:'3%',marginBottom:'2%',letterSpacing:1,color:'white'}}>9.8/10 Limited Votes</span>
  <div style={{display:'flex',flexDirection:'row',background:'#4b4b4b',width:'80%',height:'18%',borderRadius:5,marginLeft:'2%', justifyContent:'space-between',marginBottom:'3%'}}>
<div style={{display:'flex',flexDirection:'column',paddingTop:'3%',paddingBottom:'3%',paddingLeft:'2%'}}>
<span style={{color:'white',fontSize:'20px',fontWeight:'bold',letterSpacing:1}}>Add your rating & review</span>
<span style={{color:'#dfe4ea',fontSize:'18px',letterSpacing:1}}>Your rating matter</span>
</div>
<Button size="medium" style={{fontWeight:'bold',width:'25%',height:'60%',marginTop:'4%',background:'white',color:'black',marginRight:'2%'}}>Rate now</Button>
  </div>
  <div style={{display:'flex',flexDirection:'row',marginLeft:'2%',marginBottom:'5%'}}>
<div style={{background:'#dfe4ea',marginRight:'2%',padding:'1%',letterSpacing:1}}>2D,3D</div>
<div style={{background:'#dfe4ea',marginRight:'2%',padding:'1%',letterSpacing:1}}>Hindi,Telgu,English</div>
  </div>
   <Button variant="contained" style={{width:'50%',height:'10%',marginLeft:'2%',background:'#eb3b5a',color:'white',fontSize:'18px',paddingTop:'2%',paddingBottom:'2%'}}>Book tickets</Button>
     </div>
    </div>)
}