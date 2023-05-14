import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [data, setData] = useState("");
  const [emailError, setEmailError] = useState("Email Address");
  const [passwordError, setPasswordError] = useState("Password");

  //   const getInputValueEmail = (e) =>
  //     setLoginEmail(() => {
  //       e.target.value;
  //     });
  //   };
  const history = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://644ccfee57f12a1d3dd16e67.mockapi.io/crud-react")
      .then((result) => {
        // console.log(result.data.name);
        setData(result.data);
      });
  };

  const login = (e) => {
    e.preventDefault();

    data.map((item) => {
      if (
        item.email === loginEmail.toLowerCase() &&
        item.password === loginpassword.toLowerCase()
      ) {
        history("/read");
      } else if (
        !item.email == loginEmail.toLowerCase() &&
        !item.password == loginpassword.toLowerCase()
      ) {
        setEmailError("Email not Found");
        setPasswordError("wrong  password");
      } else if (!item.email == loginEmail.toLowerCase()) {
        setEmailError("Email not Found");
      } else if (!item.password == loginpassword.toLowerCase()) {
        setPasswordError("wrong  Password");
      } else {
        
      }
    });
    // for (let i = 0; i <= data.length; i++) {
    //   if (
    //     data[i].email === loginEmail.toLowerCase() ||
    //     data[i].password === loginpassword.toLowerCase()
    //   ) {
    //     alert("loged in");
    //     history("/read");
    //   } else {
    //     alert("You Are Not Register");
    //   }
    // }
  };

  return (
    <>
      <form
        className="container"
        style={{
          width: "300px ",
          height: "250px",
          border: "1px solid green",
          marginTop: "30px",
          padding: "20px",
          borderRadius: "10px",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/blue-abstract-layered-stripes-background_53876-104039.jpg?size=626&ext=jpg&ga=GA1.1.844452630.1684033595&semt=ais')",
          height: "90vh",
          marginTop: "15px",
          fontSize: "",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: "black",
        }}
      >
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input
            type="email"
            className="form-control "
            placeholder="type email here..."
            style={{ border: "1px black solid" }}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <label className="form-label" for="form2Example1">
            {emailError}
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input
            type="password"
            style={{ border: "1px black solid" }}
            placeholder="type email here..."
            className="form-control"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <label className="form-label" for="form2Example2">
            {passwordError}
          </label>
        </div>

        {/* <!-- 2 column grid layout for inline styling -->
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <!-- Checkbox -->
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div> */}

        {/* <div className="col">
            <!-- Simple link -->
            <a href="#!">Forgot password?</a>
          </div>
        </div> */}

        {/* <!-- Submit button --> */}
        <button
          type="button"
          className="btn btn-secondary  mb-4"
          style={{ background: "water" }}
          onClick={login}
        >
          Sign in
        </button>

        {/* <!-- Register buttons --> */}
        <div className="text-center">
          <p>
            Not a member? <Link to={"/create"}>Register</Link>
          </p>
          {/* <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button> */}
          {/* 
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button> */}
        </div>
      </form>
    </>
  );
};

export default Login;
