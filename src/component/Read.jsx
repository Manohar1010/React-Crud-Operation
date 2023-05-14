import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");
  const [search, setSearch] = useState("");

  const Updatehendle = (id, name, email, password) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  const getData = () => {
    axios
      .get("https://644ccfee57f12a1d3dd16e67.mockapi.io/crud-react")
      .then((result) => {
        // console.log(result.data);
        setData(result.data);
      });
  };

  const handelDelete = (id) => {
    axios
      .delete(`https://644ccfee57f12a1d3dd16e67.mockapi.io/crud-react/${id}`)
      .then(() => {
        getData();
      });
  };

  const searchInput = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch mt-2 ">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          style={{ border: "1px red solid" }}
          onClick={() => {
            if (tableDark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
        {/* <label htmlFor="" className="">
          <span className="text-light bg-secondary p-2 border rounded-left">
            Light
          </span>
          <span className="bg-dark text-light p-2 rounded-right">Dark</span>
        </label> */}
        <div class="form-group">
          <input
            type="search"
            placeholder="type here..."
            class="form-control"
            style={{
              width: "200px",
              height: "30px",
              marginRight: "50px",
              border: "1px red solid",
            }}
            onChange={searchInput}
          />
        </div>
      </div>

      <div className="d-flex justify-content-around m-2">
        <h2>Read Data</h2>
        <Link to={"/create"}>
          <button className="btn btn-success" style={{marginLeft:"550px"}}>Create</button>
        </Link>
        <Link to={"/"}>
          <button className="btn btn-danger" style={{marginRight:"20px"}} >Sign-out</button>
        </Link>
        
      </div>
      <div className="container">
        <table className={`table ${tableDark}`}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {data
            .filter((field) => {
              if (field === "") {
                return field;
              } else {
                return (
                  field.name.toLowerCase().includes(search) ||
                  field.email.toLowerCase().includes(search)
                );
              }
            })

            .map((item) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <Link to={"/update"}>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              Updatehendle(
                                item.id,
                                item.name,
                                item.email,
                                item.password
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handelDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default Read;
