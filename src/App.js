import { Routes,BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./UserInterface/Screen/Home";
import MovieDetails from "./UserInterface/Screen/MovieDetails";
function App() {
  return (
  <div>
  <Router>
    <Routes>
   <Route element={<Home/>} path="/home"/>
   <Route element={<MovieDetails/>} path="/moviedetails"/>
    </Routes>
  </Router>
  </div>
   
  );
}


export default App;
