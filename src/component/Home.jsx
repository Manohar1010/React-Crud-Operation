import React from "react";
import { useNavigate } from "react-router-dom";





const Home = () => {

  const navigate = useNavigate();

  const createData = () => {
    navigate("/create");
  };
  return (
    <>
      {/* <div
        className="container alert-primary "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h1>Wel-come To My Web-side</h1>

        <button className="btn btn-success"> Create</button>
      </div> */}

      <div className="d-flex justify-content-between alert-primary p-3">
        <h1>Wel-come To My Web-site</h1>
        <button className="btn btn-success" onClick={createData}>
          Create
        </button>
      </div>
    </>
  );
};

export default Home;
