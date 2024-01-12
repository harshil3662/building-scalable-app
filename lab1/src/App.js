import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
