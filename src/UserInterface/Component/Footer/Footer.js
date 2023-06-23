import React from "react";
import { Grid, Button, Divider } from "@mui/material";
import './Footer.css'
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AppleIcon from "@mui/icons-material/Apple";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function Footer(props) {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="footerContainer">
      <Grid container spacing={3}>
        <Grid item xs={sm ? 12 : 3}>
          <div className="footerGrid1">
            <div className="logo">
            <img src="assets/bookmyshow_logo.jpg" width="60%" />

            </div>
            <div className="fotterIconDiv">
              <InstagramIcon
                className="footerIconInsta"
                fontSize="large"
              />
              <TwitterIcon className="footerIcon" fontSize="large" />
              <LinkedInIcon className="footerIcon" fontSize="large" />
              <FacebookIcon className="footerIcon" fontSize="large" />
            </div>
            <div style={{ color: "#576574" }}>TomarIndustry@Limited</div>
          </div>
        </Grid>
        <Grid item xs={sm ? 6 : 3}>
          <div className="footerGrid2">
            <p>home</p>
            <p>Delivery Areas</p>
            <p>Careers</p>
            <p>Customer Support</p>
            <p>Press</p>
          </div>
        </Grid>
        <Grid item xs={sm ? 6 : 3}>
          <div className="footerGrid3">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Risponsible Disclosure Policy</p>
          </div>
        </Grid>
        <Grid item xs={sm ? 12 : 3}>
          <div className="footerGrid4">
            <p>Download App</p>
            <Button
           className="androidbtn"
              variant="outlined"
              startIcon={<PhoneAndroidIcon />}
            >
              download
            </Button>
            <div style={{marginTop:'2%'}}>
            <Button
             className="applebtn"
              variant="outlined"
              
              startIcon={<AppleIcon />}
            >
              download
            </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
