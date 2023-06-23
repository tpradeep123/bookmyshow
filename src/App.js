import { Routes,BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./UserInterface/Screen/Home";
function App() {
  return (
  <div>
  <Router>
    <Routes>
   <Route element={<Home/>} path="/home"/>
    </Routes>
  </Router>
  </div>
   
  );
}


export default App;
