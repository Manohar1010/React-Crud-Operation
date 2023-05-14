import logo from "./logo.svg";
import "./App.css";
import Create from "./component/Create";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Read from "./component/Read";
import Home from "./component/Home";
import Update from "./component/Update";
import Login from "./component/Login";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* <div className="">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <Link to="/read">Read</Link>
              </li>
            </ul>
          </div> */}
          <Route exact path="/" Component={Home}></Route>
          <Route  path="/create" Component={Create}></Route>
          <Route path="/read" Component={Read}></Route>
          <Route path="/update" Component={Update}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
