import Header from "../Component/header/Header";
import Banner from "../Component/banner/Banner";
import "./Home.css";
import Movie from "../Component/MovieComponent/Movie";
import Footer from "../Component/Footer/Footer";
export default function Home() {
  return (
    <div className="maincontainer">
      <Header />
      <div className="bannercontainer">
        <div className="bannerScontainer">
          <Banner />
        </div>
      </div>
   <Movie/>
   <Footer/>
    </div>
  );
}
