import React, { useState } from "react";
import "../App.css";
import AddToList from "./AddToList";
import List from "./List";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export interface IProps {
  laptop: {
    model: string;
    url: string;
    os: string;
    processor: string;
    price: string;
  }[];
}

export default function MyComponent() {
  const [laptop, setLaptop] = useState<IProps["laptop"]>([
    {
      model: "APPLE 16-INCH MACBOOK PRO M1 MAX",
      url: "https://static.digit.in/product/thumb_222578_product_td_300.jpeg",
      os: "Mac OS Monterey",
      processor: "10-core ",
      price: "	₹329,900",
    },
    {
      model: "DELL XPS 13 (9310)",
      url: "https://static.digit.in/product/thumb_185647_product_td_300.jpeg",
      os: "Windows 10 Home",
      processor: "11th Gen Intel® Core™ i7-1185G7  ",
      price: "	₹225,000",
    },
    
  ]);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Add">Add</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/Add"
              element={<AddToList laptop={laptop} setLaptop={setLaptop} />}
            >
              {/* <AddToList laptop={laptop} setLaptop={setLaptop} /> */}
            </Route>
            <Route path="/" element={<List laptop={laptop} />}>
              {/* <List laptop={laptop} /> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
