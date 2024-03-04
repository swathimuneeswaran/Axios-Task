import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  })
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", values)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <div
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
        style={{ backgroundColor: "skyblue" }}
      >
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Add a User</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                onChange={e => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter Username"
                onChange={e => setValues({ ...values, username: e.target.value }) }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter a valid Email"
                onChange={e => setValues({ ...values, email: e.target.value }) }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone"></label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter a address"
                onChange={e => setValues({ ...values, phone: e.target.value }) }
              />
            </div>
            <button className="btn btn-success">Submit</button>
            <Link to="/" className="btn btn-primary ms-3">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
