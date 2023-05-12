import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const updateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://644ccfee57f12a1d3dd16e67.mockapi.io/crud-react/${id}`, {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
     <h2>Update Data</h2>

      <form
        className="container"
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={updateSubmit}
        >
          Update
        </button>

        <Link to={"/read"} >
        <button className="btn btn-primary" style={{marginLeft:"10px"}}><span>Back</span></button>
        </Link>
      </form>
    </>
  );
};

export default Update;
