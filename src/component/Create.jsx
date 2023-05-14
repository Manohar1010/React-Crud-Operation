import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const ReadData = () => {
    try {
      history("/");
    } catch (error) {}
  };

  const header = { "Access-Control-Allow-Origin": "*" };

  const handelSubmit = (e) => {
    if (name && email && password) {
      console.log();
      e.preventDefault();
      axios
        .post("https://644ccfee57f12a1d3dd16e67.mockapi.io/crud-react", {
          name: name,
          email: email,
          password: password,
          header,
        })
        .then(() => {
          history("/");
        });
    } else {
      alert("Full fill the input");
    }
  };

  return (
    <>
      <form
        className="container"
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "30px",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/blue-abstract-layered-stripes-background_53876-104039.jpg?size=626&ext=jpg&ga=GA1.1.844452630.1684033595&semt=ais')",
          height: "90vh",
          width:"90vh",
          marginTop: "10px",
          fontSize: "",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color:"black"
        }}
      >
        <div className="d-flex justify-content-between m-2">
          <h2>Create</h2>
          <button className="btn btn-primary" onClick={ReadData}>
            Login
          </button>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="email"
            className="form-control"
            style={{ border: "1px solid black" }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            style={{ border: "1px solid black" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            style={{ border: "1px solid black" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handelSubmit}
        >
          Submit
        </button>

        {/* <button
          type="submit"
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={ReadData}
        >
          Read
        </button> */}
      </form>
    </>
  );
};

export default Create;
