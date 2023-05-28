import React, { useState, useEffect } from "react";

const DinamicNavbar = () => {
  const [data, setData] = useState([]);
  const [navInput, setNavInput] = useState("");
  // console.log(data);
  const setNav = (e) => {
    e.preventDefault();
    const obj = {
      itemName: navInput,
    };

    setData([...data, obj]);
    // e.target.name.value = ""
  };
  // localStorage.getItem("Datas")

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('Datas')));
  }, []);

  useEffect(() => {
    localStorage.setItem("Datas", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Array.from(data).map((item, index) => {
                return (
                  <li key={index} className="nav-item m-2">
                    {item.itemName}
                  </li>
                );
              })}

              {/*  <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li> */}
            </ul>
            <form className="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Set Nav-Item...."
                aria-label="Search"
                onChange={(e) => {
                  setNavInput(e.target.value);
                }}
              />
              <button
                onClick={setNav}
                className="btn btn-outline-success"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DinamicNavbar;
