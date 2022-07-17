import Navigation from "./component/Navigation";
import Body from "./component/body";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Create from "./component/Create";
import BlogDetails from "./component/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element= {<Body />} />
          <Route path="create" element= {<Create />} />
          <Route path="/blogs/:id" element= {<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
