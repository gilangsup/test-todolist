import React, { useState, useEffect } from "react";
// import SearchPage from './components/SearchPage';
import { Container } from "reactstrap";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [project, setProject] = useState();
  const axios = require("axios");
  const getData = () => {
    axios.get("http://demo7617443.mockable.io/getProjects").then((res) => {
      setProject(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Task or Project...."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {project
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (
            val.projects.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div key={key}>
              <p>{val.projects}</p>
            </div>
          );
        })}
      {/* <SearchPage/> */}
    </div>
  );
}

export default App;
