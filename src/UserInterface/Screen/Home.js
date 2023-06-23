import Header from "../Component/header/Header";
import Banner from "../Component/banner/Banner";
import "./Home.css";
import Movie from "../Component/MovieComponent/Movie";
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
    </div>
  );
}
